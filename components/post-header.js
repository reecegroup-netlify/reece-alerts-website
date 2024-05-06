import Avatar from "./avatar";
import DateTime from "./date-time";
import CoverImage from "./cover-image";
import PostTitle from "./post-title";

export default function PostHeader({
  title,
  // coverImage,
  published,
  updated,
  // author,
}) {
  return (
    <>
      <PostTitle>{title}</PostTitle>
      <div className="hidden md:block md:mb-12">
        {/* <Avatar name={author.name} picture={author.picture} /> */}
      </div>
      {/* <div className="mb-8 md:mb-16 -mx-5 sm:mx-0">
        <CoverImage
          title={title}
          responsiveImage={coverImage.responsiveImage}
        />
      </div> */}
      <div className="max-w-2xl mx-auto">
        {/* <div className="block md:hidden mb-6">
          <Avatar name={author.name} picture={author.picture} />
        </div> */}
        <div className="mb-6 text-lg">
          Published: <DateTime dateString={published} />
          <br /> Updated: <DateTime dateString={updated} />
        </div>
      </div>
    </>
  );
}
