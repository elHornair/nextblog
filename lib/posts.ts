import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remarkRehype from 'remark-rehype';
import rehypeSanitize from 'rehype-sanitize';
import rehypeStringify from 'rehype-stringify';
import remarkFrontmatter from 'remark-frontmatter';
import remarkGfm from 'remark-gfm';

const postsDirectory = path.join(process.cwd(), 'posts');

export function getSortedPostsData () {
    // Get file names under /posts
    const fileNames = fs.readdirSync(postsDirectory);
    const allPostsData = fileNames.map(fileName => {
        // Remove ".md" from file name to get id
        const id = fileName.replace(/\.md$/, '');

        // Read markdown file as string
        const fullPath = path.join(postsDirectory, fileName);
        const fileContents = fs.readFileSync(fullPath, 'utf8');

        // Use gray-matter to parse the post metadata section
        const matterResult = matter(fileContents);

        // Combine the data with the id
        return {
            id,
            imageUrl: `/images/${id}/main.jpg`,
            title: `${matterResult.data.title1} ${matterResult.data.title2}`,
            ...(matterResult.data as { date: string, title1: string, title2: string, description: string, imageUrl: string, tags: string })
        };
    });
    // Sort posts by date
    return allPostsData.sort((a, b) => {
        if (a.date < b.date) {
            return 1;
        } else {
            return -1;
        }
    });
}

export function getAllPostIds () {
    const fileNames = fs.readdirSync(postsDirectory);
    return fileNames.map(fileName => {
        return {
            params: {
                id: fileName.replace(/\.md$/, '')
            }
        };
    });
}

async function markdownToHtml (markdown) {
    const processedContentHtml = await unified()
        .use(remarkParse)
        .use(remarkFrontmatter)
        .use(remarkGfm)
        .use(remarkRehype)
        .use(rehypeSanitize)
        .use(rehypeStringify)
        .process(markdown);

    return String(processedContentHtml);
}

// TODO: refactor this, so it shares the common code with getSortedPostsData() (helper function that turns a path into a blog info object
export async function getPostData (id: string) {
    const fullPath = path.join(postsDirectory, `${id}.md`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    const matterResult = matter(fileContents);
    const contentHtml = await markdownToHtml(fileContents);

    return {
        id,
        contentHtml,
        imageUrl: `/images/${id}/main.jpg`,
        title: `${matterResult.data.title1} ${matterResult.data.title2}`,
        ...(matterResult.data as { date: string, title1: string, title2: string, description: string, imageUrl: string, tags: string })
    };
}
