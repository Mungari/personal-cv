module.exports = {
  siteMetadata: {
    description: "Personal cv",
    locale: "it",
    title: "Francesco's CV",
  },
    plugins: [
      {
        resolve: "gatsby-theme-intro-personal",
        options: {
          theme: {
            'back': '#e8eaef',
            'front': '#1f1f1f',
            'lead': '#eee841',
            'lead-text': '#1f1f1f',
            'line': '#cfd1d7',
            'skill-1': '#9079db',
            'skill-2': '#e58b5f',
            'skill-3': '#3ba1db',
            'skill-4': '#9079db',
            'skill-5': '#e58b5f',
            'skill-6': '#3ba1db',
            'skill-7': '#9079db',
            'skill-8': '#e58b5f',
            'skill-9': '#3ba1db',
            'skill-10': '#9079db',
            'skill-11': '#e58b5f',
            'skill-12': '#3ba1db'
          },
        },
      },
    ],
    pathPrefix: "/personal-cv"
  }
