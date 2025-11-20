import type { NuxtError } from "#app";

export default defineNuxtRouteMiddleware(async (to, from) => {
  try {
    const data = await queryCollection("content").path(to.path).count();
    // console.log("Post check middleware:", data);
    if (data === 0) {
      const error = createError({
        statusCode: 404,
        statusMessage: "The requested page does not exist.",
      });
      return abortNavigation(error);
    }
  } catch (e: NuxtError | any) {
    console.error(e);
    return abortNavigation(e);
  }
});
