import { Feed } from "feed";
import getSiteUrl from "./getSiteUrl";
import { getPostsAll } from "../api/queries/getPostsAll";
import { performRequest } from "../api/datocms";
import smartquotes from "smartquotes";

export default async function generateFeed() {
  const { postsAll } = await performRequest(getPostsAll());

  const siteURL = getSiteUrl();
  const date = new Date();
  const author = {
    name: "Allan Lasser",
    email: "allan@lasser.design",
    link: "https://allanlasser.com/",
  };
  const feed = new Feed({
    title: "Allan Lasser",
    description: "Thoughts, reading notes, and highlights",
    id: siteURL,
    link: siteURL,
    image: `${siteURL}/logo.svg`,
    favicon: `${siteURL}/favicon.png`,
    copyright: `All rights reserved ${date.getFullYear()}, Allan Lasser`,
    updated: date,
    generator: "Feed for Node.js",
    feedLinks: {
      rss2: `${siteURL}/feeds/rss.xml`,
      json: `${siteURL}/rss/feed.json`,
      atom: `${siteURL}/rss/atom.xml`,
    },
    author,
  });

  await Promise.all(
    postsAll.map(
      async ({slug, title, posted}) =>
        new Promise<void>(async (resolve) => {
          const id = `${siteURL}/posts/${slug}`;
        //   const content = String(await markdownToHtml(smartquotes(note.body)));
          feed.addItem({
            title: smartquotes(title),
            id,
            link: slug,
            // content,
            date: new Date(posted),
          });
          resolve();
        })
    )
  );
  return feed;
}
