export function thumbnailImageUrl(imageUrl?: string): string {
  if (imageUrl === undefined) {
    return "";
  }
  if (imageUrl.indexOf("unsplash.com") > -1) {
    return unsplashThumbnail(imageUrl);
  }

  if (imageUrl.indexOf("peteranderson.me/content/images/") > -1) {
    return cmsThumbnail(imageUrl);
  }
  return imageUrl;
}

function unsplashThumbnail(imageUrl: string): string {
  const [base] = imageUrl.split("?");
  return `${base}?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=256&h=256&fit=crop`;
}

function cmsThumbnail(imageUrl: string): string {
  return imageUrl.replace(
    "peteranderson.me/content/images/",
    "peteranderson.me/content/images/size/w256/"
  );
}
