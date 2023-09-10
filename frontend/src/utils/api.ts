import { GetServerSidePropsContext } from "next";
import { validateCookies } from "./helpers";

export const fetchSession = async (ctx: GetServerSidePropsContext) => {
    const headers = validateCookies(ctx);

    if (!headers) return {redirect: '/login'};
}