![logo]

![author] [![event]][event-url] ![license]

 **🙋‍♂️ An app to promote a quick and efficient interaction between the host and its subscribers.**

 **[▶ Demonstration][demo]**

# 📖 About

 An app made to offer a practical and efficiente way to connect people with questions to someone that have the answer.

 With a simples Google sign in you can create a new chat room, or then enter into some room that already exists.

 The main objective of this app is create a direct bridge between host and its subscribers.

 ## 🎨 Layout
 ![layout]

 [🔗 Click here to see the layout][layout-url]

 ## 🛠 Built with
 - [x] React.js
 - [x] Firebase

 ## 📚 What I learned
 - [x] Use and implement `Firebase` for web development
 - [x] Set up `firebase` configuration
 - [x] Some mobile-first principles

# ⚡ Getting Started
 ## 🧰 Prerequisites
 - [x] Node.js
 - [x] Yarn

 ## 📐 Setup
 You will need a `.env.local` file at your project root directory to use Firebase configuration. To set up this steps follow guide below:

 1. Create a Firebase account
 2. Create a new project
 3. Get auth configuration to connect with this web application
 4. Apply your data following the template below
 ```env
  # Firebase configuration
  REACT_APP_API_KEY=""
  REACT_APP_AUTH_DOMAIN=""
  REACT_APP_DATABASE_URL=""
  REACT_APP_PROJECT_ID=""
  REACT_APP_STORAGE_BUCKET=""
  REACT_APP_MESSAGING_SENDER_ID=""
  REACT_APP_APP_ID=""
 ```
 5. Save file
 6. 🎉 It's done! Now you are able to run the project
 ## 🔥 Run project
 ```bash
 # install packages
 yarn

 # run project
 yarn start
 ```

# 💪 Contribute
1. Fork project
2. Clone project (`git clone <link-to-forked-project>`)
3. Create a new branch (`git checkout -b <my-new-feature-name>`)
4. Stage changes (`git add .`)
5. Commit new feature (`git commit -m "<brief description about your new feature>"`)
6. Push the commit (`git push origin <branch you've created>`)
7. Open a pull request
8. It's done, thank you! 🎉

# 📜 License

 Built under **MIT License**, se `LICENSE` for more details.

---
**Made with 💜 and ☕ by [Cristian Prochnow][github] at NLW Together. Enjoy it!**

[logo]: ./.github/logo.png
[license]: https://img.shields.io/static/v1?label=license&message=MIT&color=835AFD&style=plastic
[author]: https://img.shields.io/static/v1?label=author&message=cristianprochnow&color=835AFD&style=plastic
[event]: https://img.shields.io/static/v1?label=event&message=NextLevelWeekTogether&color=835AFD&style=plastic
[event-url]: https://nextlevelweek.com/
[github]: https//github.com/cristianprochnow
[layout]: ./.github/thumbnail.png
[layout-url]: https://www.figma.com/file/2B7Naq0YAR24BIkCR1HFIQ/Hey-LetMeAsk-Copy?node-id=45%3A29835
[demo]: https://hey-letmeask.vercel.app/
