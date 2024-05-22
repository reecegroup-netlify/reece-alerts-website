import { StructuredText, Image as DatocmsImage } from 'react-datocms';
import DateTime from "./date-time";
import Container from './Container';
import Panel from './Panel';

export function Post({ post }) {

  return (
      <article>
        <Container>
          <Panel>
        <div className="py-10 px-4 md:px-6">
          <div className="relative py-2.5 md:py-4 sm:ml-[calc(2rem+1px)] md:ml-[calc(3.5rem+1px)] lg:ml-[max(calc(14.5rem+1px),calc(100%-48rem))]">

            {/* timeline line */}
            <div className="hidden absolute top-3 bottom-0 right-full mr-7 md:mr-[3.25rem] w-px bg-slate-200 dark:bg-slate-800 sm:block"></div>

              <div className="relative group mb-24" key={post.slug}>
                
                {/* timeline circle */}
                <svg viewBox="0 0 9 9" className="hidden absolute right-full mr-6 top-2 text-slate-200 dark:text-slate-600 md:mr-12 w-[calc(0.5rem+1px)] h-[calc(0.5rem+1px)] overflow-visible sm:block"><circle cx="4.5" cy="4.5" r="4.5" stroke="currentColor" className="fill-white dark:fill-slate-900" strokeWidth="2"></circle></svg>

                <div className="relative">

                  {/* title */}
                  <h1 className="text-2xl font-medium tracking-tight text-[#003057] mb-4 lg:mb-5">
                    {post.title}
                  </h1>

                  {/* meta */}
                  <dl className="lg:absolute left-0 top-0 lg:left-auto lg:right-full lg:mr-[calc(6.5rem+1px)] mb-4 lg:mb-5">
                    {post.posted && (
                      <>
                        <dt className="text-xs tracking-wide uppercase mb-2 lg:mb-2.5">Posted</dt>
                        <dd className="whitespace-nowrap text-sm mb-5 lg:mb-6">
                          <DateTime dateTimeString={post.posted} />
                        </dd>
                      </>
                    )}
                    {post.updated && (
                      <>
                        <dt className="text-xs tracking-wide uppercase mb-2 lg:mb-2.5">Updated</dt>
                        <dd className="whitespace-nowrap text-sm mb-5 lg:mb-6">
                          <DateTime dateTimeString={post.updated} />
                        </dd>
                      </>
                    )}
                    <dt className="text-xs tracking-wide uppercase mb-2 lg:mb-2.5">Status</dt>
                    <dd className="whitespace-nowrap text-sm mb-5 lg:mb-6">Status</dd>
                  </dl>

                  {/* content */}
                  <div className="prose prose-slate prose-a:relative prose-a:z-10 dark:prose-dark mb-5" id="main-content">

                    <StructuredText
                      data={post.content}
                      renderBlock={({ record }) => {
                        if (record.__typename === 'ImageBlockRecord') {
                          return <DatocmsImage data={record.image.responsiveImage} />;
                        }

                        return (
                          <>
                            <p>Don&apos;t know how to render a block!</p>
                            <pre>{JSON.stringify(record, null, 2)}</pre>
                          </>
                        );
                      }}
                    />

                  </div>
                  
                  </div>
                </div>
              </div>
              
          </div>
          </Panel>
        </Container>
      </article>
  );
}