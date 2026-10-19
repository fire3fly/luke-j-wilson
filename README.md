# Luke J. Wilson, Writer and Editor: Portfolio Website

A one-page portfolio built with Next.js. Warm walnut and brass colors, taken from his home office.

All the words on the site live in ONE file: `src/content.ts`.
You never need to touch the other files to change what the site says.

---

## Part 1: See it on your computer

You only do this once to set up.

1. Install Node.js (the "LTS" version) from https://nodejs.org. Accept all defaults.
2. Open the unzipped `lucius-site` folder.
3. Open a terminal inside that folder.
   - Windows: click the folder's address bar, type `cmd`, press Enter.
   - Mac: right-click the folder and choose "New Terminal at Folder".
4. Type this and press Enter (takes about a minute):

       npm install

5. Type this and press Enter:

       npm run dev

6. Open http://localhost:3000 in your browser. You are looking at the site.
   Leave the terminal open. Any change you save shows up in the browser by itself.
7. To stop it, click the terminal and press Ctrl + C.

---

## Part 2: Fill in his words

1. Open `src/content.ts` in Cursor (or any text editor).
2. Find anything inside [BRACKETS]. On the website these show up highlighted in gold with a dashed outline, so you can see what is left.
3. Replace the bracket AND the brackets themselves with his words.

   Before:

       summary: "[A SHORT NOTE ON WHAT THESE YEARS GAVE HIS WRITING]",

   After:

       summary: "These years taught me to listen before I write.",

4. Save the file. Check the browser. Repeat.
5. When no gold highlights are left, the page is finished.

Tips:
- Keep the quote marks `" "` around the text.
- If a line has an apostrophe, like "don't", that is fine inside double quotes.
- To remove a line you do not want, delete the whole `{ ... },` block.
- To add another script, copy one whole `{ title: ..., status: ... },` block inside `projects` and paste it right below.

### Things only he can confirm
- How he wants his name shown (top of `content.ts`). The site says "Luke J. Wilson", matching his scripts. His resume and domain say "Lucius".
- The format and status of each script, and that the logline for No Turning Back is right
- Anything about his family, which is his to share or keep private

Privacy: the only contact detail on the site is his email. Keep it that way.

---

## Part 3: Put it on the internet (free, with Vercel)

1. Create a free account at https://github.com and make a new repository called `lucius-site`.
2. Upload all the files from this folder to it. On the repository page choose "Add file", then "Upload files". Do NOT upload the `node_modules` folder.
3. Create a free account at https://vercel.com (choose "Continue with GitHub").
4. Click "Add New", then "Project", choose `lucius-site`, and click "Deploy".
5. After about a minute you get a web address ending in `.vercel.app`.
6. Every time you change `content.ts` on GitHub, Vercel updates the site by itself.

Optional: to use his own name as the address (like `luciuswilson.com`), buy it from any domain seller, then in Vercel open the project, choose "Settings", then "Domains", and follow the prompts.

---

## What moves on the page

- The three words under his name type themselves out and swap. Change them in `src/content.ts`, in `hero`, under `roles`.
- Sections fade up gently as you scroll to them.
- The menu is clear at the top and turns solid as you scroll. On a phone it becomes a button that slides open.
- The posters, diplomas, and script pages lift slightly when you hover over them.
- The Character, Theme, and Tone chips in the top right drift slowly (large screens only).
- Arrows slide in beside the contact links on hover.
- Everything above switches off automatically for visitors who set "reduce motion" on their device.

---

## Folder map

    src/content.ts      All the words. Edit this one.
    src/app/page.tsx    How the sections are laid out.
    src/components/     The menu, the typing effect, and the scroll fade-ins.
    src/app/globals.css Colors, fonts, spacing.
    src/app/layout.tsx  The page title that shows in the browser tab.

### Changing colors
Open `src/app/globals.css` and look at the top. The color names are there:
`--brass` is the gold, `--walnut` is the brown, `--parchment` is the cream.
