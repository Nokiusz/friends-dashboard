'use client';
import React, { useState, useEffect, useRef, use } from 'react';
import { Layout, Tooltip } from 'antd';
import { getHolidayOnDate, isHoliday, isWeekend } from 'poland-public-holidays';
import { ITEM_WIDTH } from '@/utils/constants';
import Image from 'next/image';
import friendlist from '@/mocks/friendList';

const { Content } = Layout;

const Calendar = () => {
  // Define the start and end dates
  const startDate = new Date('2023-01-01');
  const endDate = new Date('2023-12-31');

  // Function to generate an array of dates in the specified range
  const generateDateRange = (start: Date, end: Date) => {
    const dates = [];
    let currentDate = new Date(start);
    while (currentDate <= end) {
      dates.push(new Date(currentDate));
      currentDate.setDate(currentDate.getDate() + 1);
    }
    return dates;
  };

  const days = generateDateRange(startDate, endDate);

  const dateColumnRef = useRef<HTMLDivElement>(null); // Ref for the date column
  const [currentMonth, setCurrentMonth] = useState<string>('January'); // State for the current month

  useEffect(() => {
    if (!dateColumnRef.current) return;

    const handleScroll = () => {
      if (!dateColumnRef.current) return;

      const scrollLeft =
        currentMonth.toLowerCase() === 'november'
          ? dateColumnRef.current.scrollLeft + 13 * ITEM_WIDTH
          : dateColumnRef.current.scrollLeft;

      // Calculate the month index based on the scroll position
      const monthIndex = Math.floor(scrollLeft / ITEM_WIDTH);

      if (days[monthIndex]) {
        const monthName = days[monthIndex].toLocaleDateString('en-US', {
          month: 'long',
        });
        setCurrentMonth(monthName);
      }
    };
    dateColumnRef.current.addEventListener('scroll', handleScroll);

    return () => {
      if (dateColumnRef.current) {
        dateColumnRef.current.removeEventListener('scroll', handleScroll);
      }
    };
  }, [currentMonth, days]);

  useEffect(() => {
    if (!dateColumnRef.current) return;
    const today = new Date();

    const todayElement = document.querySelector(
      `[data-date="${today.toISOString().slice(0, 10)}"]`
    );

    if (todayElement) {
      todayElement.scrollIntoView({
        block: 'nearest',
        behavior: 'smooth',
      });
    }
  }, [dateColumnRef]);

  return (
    <Content
      style={{
        margin: '24px 24px',
        padding: 24,
        minHeight: 280,
        background: '#fff',
      }}
    >
      <h1>Today: {new Date(Date.now()).toLocaleDateString()}</h1>
      <h1>{currentMonth}</h1>

      <div className='calendar' ref={dateColumnRef}>
        <div className='date-items'>
          {days.map((date, index) => {
            return (
              <div
                className='date-item'
                key={index}
                data-date={date.toISOString().slice(0, 10)}
              >
                <Tooltip placement='top' title={getHolidayOnDate(date)?.name}>
                  <div
                    className={`date-header ${
                      isHoliday(new Date(date)) ||
                      (isHoliday(new Date(date)) && isWeekend(new Date(date)))
                        ? 'day-color holiday'
                        : isWeekend(new Date(date))
                        ? 'day-color weekend'
                        : ''
                    }`}
                  >
                    <div className='day-number'>{date.getDate()}</div>
                    <div className='day-name'>
                      {date.toLocaleDateString('en-US', { weekday: 'short' })}
                    </div>
                  </div>
                </Tooltip>
              </div>
            );
          })}
        </div>

        {/* User Avatars */}

        <div className='calendar-friends-container'>
          <div className='calendar-friends-avatars'>
            {friendlist.map((user, userIndex) => (
              <Image
                key={user.id + userIndex}
                className='calendar-friend-avatar'
                src={user.avatar}
                alt={`User ${user.id} Avatar`}
                width={51}
                height={51}
              />
              // <div className='calendar-friend-avatar' key={user.id + userIndex}>
              //   1
              // </div>
            ))}
          </div>

          <div className='calendar-friends'>
            {friendlist.map((user, userIndex) => (
              <div key={user.id + userIndex} className='calendar-friend'>
                {days.map((date, dateIndex) => {
                  const userDate = user.dates.find(
                    (d) =>
                      date >= new Date(d.dateStart) &&
                      date <= new Date(d.dateEnd)
                  );
                  const cellClasses = ['calendar-cell'];
                  if (userDate) {
                    cellClasses.push('day-color', userDate.type);
                  }
                  return (
                    <div key={dateIndex} className={cellClasses.join(' ')}>
                      {/* Content for the cell */}
                      {userDate && userDate.type}
                    </div>
                  );
                })}
              </div>
            ))}
          </div>
        </div>
      </div>
    </Content>
  );
};

export default Calendar;
