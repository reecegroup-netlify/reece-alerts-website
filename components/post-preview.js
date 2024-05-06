import Avatar from "./avatar";
import DateTime from "./date-time";
import CoverImage from "./cover-image";
import Link from "next/link";

export default function PostPreview({
  title,
  // coverImage,
  published,
  updated,
  excerpt,
  // author,
  slug,
}) {
  return (
    <div>
      {/* <div className="mb-5">
        <CoverImage
          slug={slug}
          title={title}
          responsiveImage={coverImage.responsiveImage}
        />
      </div> */}
      <h3 className="text-3xl mb-3 leading-snug">
        <Link href={`/posts/${slug}`} className="hover:underline">
          {title}
        </Link>
      </h3>
      <p className="text-lg leading-relaxed mb-4">{excerpt}</p>
      <div>
        <div className="">
          <dl>
            <dt className="text-xs tracking-wide mb-2 uppercase">Posted</dt>
            <dd className="text-sm mb-5"><DateTime dateString={published} /></dd>
            <dt className="text-xs tracking-wide mb-2 uppercase">Updated</dt>
            <dd className="text-sm mb-5"><DateTime dateString={updated} /></dd>
            <dt className="text-xs tracking-wide mb-2 uppercase">Status</dt>
            <dd className="text-sm mb-5">Status</dd>
          </dl>
        </div>
      </div>
      {/* <Avatar name={author.name} picture={author.picture} /> */}
    </div>
  );
}
