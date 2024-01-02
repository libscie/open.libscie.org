import { Container, Group, Anchor } from '@mantine/core'

// import { useAuth } from 'src/auth'

import classes from './Footer.module.css'

const links = [
  { link: '/disclaimer', label: 'Disclaimer' },
  { link: 'https://libscie.org', label: 'Blog' },
]

const Footer = () => {
  // const { isAuthenticated, currentUser, logOut } = useAuth()

  const items = links.map((link) => (
    <Anchor<'a'> c="dimmed" key={link.label} href={link.link} size="sm">
      {link.label}
    </Anchor>
  ))

  return (
    <footer className={classes.footer}>
      <Container className={classes.inner}>
        <img
          height={30}
          src="https://libscie.org/content/images/2020/07/libscie-logomark-1024-square.png"
          alt="Logo of Liberate Science"
        />
        <Group className={classes.links}>{items}</Group>
      </Container>
    </footer>
  )
}

export default Footer
