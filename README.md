# Friends Dashboard

Welcome to the Friends Dashboard! This web application is designed to help users connect with friends more easily and schedule meetups hassle-free. With Discord authentication, friend management, and availability tracking, staying in touch has never been simpler.

## Features

- **Discord Authentication:** Log in securely using your Discord credentials.

- **Friend Management:** Add and manage your friends within the app. Keep track of your friend list effortlessly.

- **Availability Tracking:** Set your availability as "free" or "busy" to help coordinate meetups with your friends.

## Tech Stack

- **Frontend:** Built with [Next.js](https://nextjs.org/) and [TypeScript](https://www.typescriptlang.org/).

- **Backend:** Powered by [Node.js](https://nodejs.org/) and [Express](https://expressjs.com/).

## Getting Started

Follow these steps to set up and run the Friends Dashboard on your local machine:

**NOTE** be mindfull of that the repo is created as a `monorepo` so most of the stuff needs to be done in both `api` and `frontend` separately.

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/Nokiusz/friends-dashboard.git
   ```

2. **Install Dependencies:**

   ```bash
   cd friends-dashboard
   cd api
   npm install
   cd ..
   cd frontend
   npm install
   ```

3. **Configure Environment Variables:**

   Create a `.env` file in the root directory of `api` and add your Discord API credentials and any other necessary environment variables.

   ```env
   DISCORD_CLIENT_ID=your_client_id
   DISCORD_CLIENT_SECRET=your_client_secret
   DISCORD_REDIRECT_URL=your_redirect_url
   MONGODOB_CONNECTION_STRING=your_database_connection_string
   ```

4. **Run the Development Server:**

   ```bash
   npm run dev
   ```

5. **Open the App:**

   Visit `http://localhost:3000` or `http://localhost:3001` in your web browser to access the Friends Dashboard/Friends Dashboard Backend.

Happy connecting with friends!
