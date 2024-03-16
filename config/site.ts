export const headerLinks = [
  {
    label: 'Home',
    route: '/',
  },
  {
    label: 'Create Event',
    route: '/events/create',
  },
  {
    label: 'My Profile',
    route: '/profile',
  },
]

export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  links: {
    author: "https://abhijayrajvansh.com"
  }
}


// MONGODB_URL=mongodb+srv://abhijayrajvansh:Vt3Hs8iHA8lLwQJx@meetup-cluster.ddsctdf.mongodb.net/?retryWrites=true&w=majority&appName=meetup-cluster