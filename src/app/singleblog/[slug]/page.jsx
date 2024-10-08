import React from 'react'
import fs from 'fs';
import matter from 'gray-matter';
import rehypeDocument from 'rehype-document'
import rehypeFormat from 'rehype-format'
import rehypeStringify from 'rehype-stringify'
import remarkParse from 'remark-parse'
import remarkRehype from 'remark-rehype'
import {unified} from 'unified'
import rehypePrettyCode from "rehype-pretty-code";
// import {reporter} from 'vfile-reporter' 

async function singleBlog({params}) {
    const {slug}=params;
    const fileContent=fs.readFileSync(`contents/${slug}.md`, 'utf-8');
    const {content, data}=matter(fileContent);

const file = unified()
  .use(remarkParse)
  .use(remarkRehype)
  .use(rehypeDocument, {title: '👋🌍'})
  .use(rehypeFormat)
  .use(rehypePrettyCode, {
    theme: "github-dark"
  })
  .use(rehypeStringify)
 
//   .process('# Hello world!')

const htmlContent=(await file.process(content)).toString();


  return (
    <div className='flex flex-col md:items-center items-start'>
        <div className="prose lg:prose-xl dark:prose-invert">
            <h1>{data.title}</h1>
            <p>{data.description}</p>
        </div>
        <div dangerouslySetInnerHTML={{__html: htmlContent}} className="prose lg:prose-xl dark:prose-invert w-[95vw]"></div>
    </div>
  )
}

export default singleBlog 