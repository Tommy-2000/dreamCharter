# dreamChaser

### Job Search & Careers Support Built By Dreamers For Dreamers

### Jobs, messaging & careers support platform designed with a skills-first approach. Open to graduates, apprentices & work experience students

## Project Motivation

- While LinkedIn has the wide reach for networking for graduates to get in touch with companies and employees in specific industries, it was designed as a business-focused social media platform that depends on connections. My intent for this project is that this platform is less of a social media application and more of a careers platform that is future-proofed for skills development and interview preparation.

- For students in Year 10 to 13 (Secondary/Senior High School), it can be easy for connections to be lost amongst posts that are not relevant to them. Furthermore, LinkedIn is lacking in specific training resources for interview preparation & assessment practice (e.g. aptitude tests, mathematical tests, behavioural tests, situational judgement tests, etc.), as these practice tools are often found in external platforms.

- My intent is to bring job searching, networking, virtual online events & interview/assessment practice together into one platform that will be designed with a skills-focused framework in mind & not designed with a social media algorithm that could reinforce irrelevant content (e.g. advertising, comedic internet memes, etc.). This focus on skills development is designed to ensure that dreamCharter is built for graduates, apprentices & students looking for work experience.

- This is not intended to replace LinkedIn, but to compliment it as a skills-focused platform to give young people the edge in chasing their dream. Bridging the gap between education & employment by enabling unique connections that can push careers forward. LinkedIn has its place in careers development & networking, but I aim to support graduates with a platform that is tailored specifically to their requirements & the level of support they may require. Students, apprentices & graduates deserve the best in their career & I aim to give them that chance.

## Values

- Skills-Based
- Supportive
- Inclusive

## Pages

- Dashboard – Shows an overview of recommended opportunities, upcoming deadlines for saved opportunities, recommended assessment/interview practices, online virtual events & more.
- Dreamchart – Users can ‘chart a course’ with other graduates, apprentices, work experience students & can freely share opportunities that they find. This will be presented as an interactive network graph where users can see the connections between jobs, companies & graduate/junior employees, helping them find the right people to discuss career opportunities. Inspired by Obsidian & how documents are organised into interactive network graphs.
- Tests – Users can find assessment practice sessions for aptitude tests, mathematics tests & behavioural tests, as well as virtual mock interviews that can be booked with an nominated as a guide for the student/graduate.
- Opportunities – Jobs can be filtered based on key personal & professional skills as well as other filters. Each job will have an in-built map showing the physical location of the job poster’s offices & allow the user to measure the commute time for on-site & hybrid roles.
- Profile – Skills, Experience & Education are sub-sections for each user.

## Planned Features

- Interactive ‘spider web’ network graph that shows:
  - Jobs that are similar or relevant to each other.
  - Progress made with job applications & their relation to each other.
  - Companies that are similar or relevant to each other.
  - Users can nominate a graduate or junior employee to act as a Career Charter. When given this role, the Career Charter can offer tailored career support & build a personalised career plan for the user. Mock interviews can also be conducted with a nominated Career Charter to allow for users to practice.

- Built-in messaging platform for directly messaging recruiters & nominated Career Charters.

- Career Charters have their own dashboard & can gain positive recognition from users for the support they give.

- Import Excel spreadsheets into the platform & turn it into a custom made network graph to show the progress & relations between each job application.

- Built-in assessment practice including numerical reasoning, verbal reasoning, abstract reasoning & situational judgement reasoning tests.

- Microsoft Teams integration that allows for mock interviews & other career meetings to be conducted on the platform.

- Accessibility tools:
  - Built-in AAC (Alternative & Augmented Communication) keyboard that is customisable for each user.
  - Colourblind-friendly contrast filters.
  - Dyslexia-friendly text font styles.
  - Text-to-speech for all content.
  - Magnifying glass tool to zoom in on all content.
  - Full offline support
  - Available for Android, iOS, Desktop (Linux version will come later) & Web

## Get Started

First, run this command to clear any existing cache before compiling with Expo:

```bash
expo -c
```

Then create the necessary canvaskit.wasm file in the 'public' folder that allows for Skia rendering on web. Credit to [Expo - Examples/with-skia](https://github.com/expo/examples/blob/master/with-skia)

```bash
pnpm setup-skia-web public && node scripts\\skiaWebInstall.js
```

If you are running this on an Android or iOS device, the canvaskit.wasm file is ignored & native rendering is used instead. This project will not work with Expo Go because of the native code generated from the Reanimated, Worklet & Skia packages.

## Contribute

If you have any suggestions or further improvements you would like to make to this project, please feel free to send me a PR with the changes you recommend to <dreamdev.tommy.2000@outlook.com>. You are also more than welcome to make a fork of this repo if you want to make your changes there. Thanks! 😀👍

> _一緒に夢に飛び込みましょう (Let’s dive into our dreams together)_
