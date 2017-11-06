/* eslint import/no-webpack-loader-syntax: off */

// Import React
import React from 'react';

// Import Spectacle Core tags
import {
  BlockQuote,
  ComponentPlayground,
  Cite,
  Deck,
  Heading,
  ListItem,
  List,
  Quote,
  Slide,
  Text,
  Appear,
  Table,
  TableRow,
  Code,
  CodePane,
  S,
  TableHeaderItem,
  TableItem,
  Link,
  Fill,
  Layout,
  Fit,
  Markdown,
  Image,
  Notes
} from 'spectacle';

// Import theme
// import createTheme from 'spectacle/lib/themes/default';
import createTheme from 'spectacle-theme-anker';
import 'prismjs/components/prism-core';
import 'prismjs/components/prism-clike';
import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-markup';
import 'prismjs/components/prism-http';

const HASHTAGS = '#angularconnect';
const SLIDE_URL = 'bit.ly/sec-angularconnect';

const theme = createTheme();

const LargeNotes = ({ children }) => {
  return (
    <Notes>
      <p style={{ fontSize: '20px' }}>{children}</p>
    </Notes>
  );
};

const Footer = ({ name, twitter, hashtags }) => {
  const footerStyles = {
    position: 'fixed',
    zIndex: 9999,
    bottom: 0,
    transform: 'translate3d(-50%, 0, 0)',
    left: '50%'
  };
  return (
    <footer style={footerStyles}>
      <p>
        Dominik Kundel |{' '}
        <a
          href={'https://twitter.com/' + twitter}
          target="_blank"
          style={theme.screen.global.a}
        >
          <img src={images.icons.twitter} style={{ height: '0.8em' }} /> @{twitter}
        </a>{' '}
        | {hashtags}{' '}
      </p>
    </footer>
  );
};

const Mono = ({ children }) => {
  const style = {
    fontFamily: theme.screen.fonts.code,
    textTransform: 'none'
  };

  return <code style={style}>{children}</code>;
};

const LinkedImage = props => {
  let {
    src,
    href,
    target,
    style,
    width,
    height,
    rel,
    children,
    ...restProps
  } = props;
  target = target || '_blank';
  rel = rel === undefined ? 'noopener noreferrer' : rel;
  const linkStyles = { border: 'none', ...style };
  return (
    <a href={href} target={target} style={linkStyles} rel={rel} {...restProps}>
      <Image src={src} width={width} height={height} /> {children}
    </a>
  );
};

const ResourceLinkWithIcon = ({ url, icon, text = '' }) => {
  text = text || url;
  return (
    <div>
      <div style={{ marginBottom: '1rem' }}>
        <LinkedImage src={icon} href={'https://' + url} height="300px" />
      </div>
      <Link href={'https://' + url} rel="noopener noreferrer" target="_blank">
        <Text>{text}</Text>
      </Link>
    </div>
  );
};

const gutter = '25px';
const inline = {
  display: 'inline',
  margin: 0
};
const images = {
  meNeutral: require('./assets/me-neutral.png'),
  meMasterChief: require('./assets/me-master-chief.png'),
  twilio: require('./assets/Twilio_logo_white.png'),
  onesieJs: require('./assets/onesiejs.jpg'),
  bobbyTables: require('./assets/bobby-tables.png'),
  samyWorm: require('./assets/samy-worm.png'),
  onesieScreenshot: require('./assets/onesie-life-screenshot.png'),
  hackerWallpaper: require('./assets/hacker-wallpaper.jpg'),
  matrixWallpaper: require('./assets/matrix-wallpaper.jpg'),
  socialMediaWallpaper: require('./assets/social-media-wallpaper.jpg'),
  hackerGif: require('./assets/hacker.gif'),
  thinkingGif: require('./assets/thinking.gif'),
  bobAllison: require('./assets/bob-allison.png'),
  waitWhatGif: require('./assets/wait-what.gif'),
  clickjackingDescription: require('./assets/Clickjacking_description.png'),
  maskedIframe: require('./assets/Masked_iframe.png'),
  icons: {
    desktopCode: require('./assets/icons/desktop_code_noun_326368_FFFFFF.svg'),
    magnifyingGlass: require('./assets/icons/magnifying_glass_noun_326365_FFFFFF.svg'),
    webSecurity: require('./assets/icons/web_security_noun_696603_FFFFFF.svg'),
    hacker: require('./assets/icons/hacker.svg'),
    superhero: require('./assets/icons/superhero_1272983_FFFFFF.svg'),
    safetyNet: require('./assets/icons/np_safety-net_14589_FFFFFF.svg'),
    email: require('./assets/icons/np_email_1002247_FFFFFF.svg'),
    github: require('./assets/icons/github-icon.svg'),
    twitter: require('./assets/icons/twitter.svg'),
    slideDownload: require('./assets/icons/np_download-presentation_719406_FFFFFF.svg')
  }
};

const codeInspect = (
  <Image src={images.icons.magnifyingGlass} height="0.8em" margin="0px" />
);

export default class Presentation extends React.Component {
  render() {
    return (
      <div>
        <Footer name="Dominik Kundel" twitter="dkundel" hashtags={HASHTAGS} />
        <Deck theme={theme} progress="bar">
          <Slide bgImage={images.matrixWallpaper} bgDarken={0.5}>
            <Image src={images.icons.webSecurity} height={200} />
            <Heading size={3}>XSS, CSRF, CSP, JWT, WTF? IDK</Heading>
            <Heading size={2}>
              <Mono>¯\_(ツ)_/¯</Mono>
            </Heading>
            <Heading size={4}>
              Dominik Kundel -{' '}
              <Link href="https://twitter.com/dkundel">@dkundel</Link>
            </Heading>
            <LargeNotes>Welcome everyone!</LargeNotes>
          </Slide>
          <Slide bgImage={images.matrixWallpaper} bgDarken={0.5}>
            <Image src={images.icons.webSecurity} height={200} />
            <Heading size={3}>Introduction to</Heading>
            <Heading size={2}>Web Security</Heading>
            <Heading size={4}>
              Dominik Kundel -{' '}
              <Link href="https://twitter.com/dkundel">@dkundel</Link>
            </Heading>
            <LargeNotes>
              Over the next 25 minutes I would like to take you through an
              introduction to web security.
            </LargeNotes>
          </Slide>
          <Slide>
            <Layout>
              <Fit style={{ display: 'flex', alignItems: 'center' }}>
                <Image src={images.meNeutral} />
              </Fit>
              <Fill style={{ marginLeft: '5rem', textAlign: 'center' }}>
                <Text textSize="4rem">
                  <S type="italic">Hi!</S>
                </Text>
                <Text textSize="2rem">
                  <S type="italic">I'm Dominik Kundel!</S>
                </Text>
                <Text style={{ marginTop: '50px' }}>
                  Developer Evangelist at
                </Text>
                <Image src={images.twilio} height="100px" />
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    marginTop: '50px',
                    textAlign: 'center'
                  }}
                >
                  <LinkedImage
                    src={images.icons.github}
                    height="80px"
                    href="https://github.com/dkundel"
                  >
                    <Text textSize="1.3rem">github/dkundel</Text>
                  </LinkedImage>
                  <LinkedImage
                    src={images.icons.twitter}
                    height="80px"
                    href="https://twitter.com/dkundel"
                  >
                    <Text textSize="1.3rem">@dkundel</Text>
                  </LinkedImage>
                  <LinkedImage
                    src={images.icons.email}
                    height="80px"
                    href="mailto:dkundel@twilio.com"
                  >
                    <Text textSize="1.3rem">dkundel@twilio.com</Text>
                  </LinkedImage>
                </div>
              </Fill>
            </Layout>
            <LargeNotes>
              But first let me introduce myself. I'm Dominik.You can reach me
              pretty much everywhere on the internet under @dkundel. I live in
              Berlin and I work as a developer evangelist at Twilio.
            </LargeNotes>
          </Slide>
          <Slide>
            <Image
              src={images.twilio}
              height="5rem"
              style={{ marginBottom: '3rem' }}
            />
            <Heading size={4} fit>
              Add messaging, voice, video and authentication in your apps with
              the language you already use
            </Heading>
            <CodePane
              lang="javascript"
              source={require('!!raw-loader!./snippets/twilio.js')}
            />
            <LargeNotes>
              In case you don't know Twilio. Twilio is a cloud communication
              platform that allows you as developers to easily integrate
              different means of communication such as voice, video or messaging
              into your applications using the languages you already know.
            </LargeNotes>
          </Slide>
          <Slide bgColor="black">
            <LargeNotes>
              There is one more thing you should know about me though
            </LargeNotes>
          </Slide>
          <Slide
            bgImage={images.onesieJs}
            bgSize="contain"
            bgRepeat="no-repeat"
          >
            <Heading
              bgColor="darkBlue"
              caps={false}
              style={{ display: 'inline-block' }}
              padding={20}
            >
              #onesiejs
            </Heading>
            <LargeNotes>
              I'm a member of a group of onesie loving JavaScript developers.
              Also known as #onesiejs
            </LargeNotes>
          </Slide>
          <Slide bgImage={images.socialMediaWallpaper}>
            <LargeNotes>
              Today we have so many social networks and communication
              channels.But there isn 't really one for onesie loving developers.
            </LargeNotes>
          </Slide>
          <Slide bgImage={images.socialMediaWallpaper} bgDarken={0.5}>
            <Image src={images.onesieScreenshot} width="70%" />
            <LargeNotes>
              So I did what every developer would do and built one myself.
              Introducing onesie.life
            </LargeNotes>
          </Slide>
          <Slide>
            <Heading size={2}>Security! Security! Security!</Heading>
            <Image src={images.hackerGif} />
            <LargeNotes>
              Being an experienced developer I obviously made sure that this
              application is as secure as possible.
            </LargeNotes>
          </Slide>
          <Slide>
            <Heading size={2}>I thought of everything</Heading>
            <List>
              <ListItem>Only HTTPS powered by Let's Encrypt</ListItem>
              <ListItem>
                It even uses HSTS (HTTP Strict Transport Security)
              </ListItem>
              <ListItem>no mixed content </ListItem>
              <ListItem>Sanitized HTML</ListItem>
              <ListItem>No room for SQL injections </ListItem>
            </List>
            <LargeNotes>
              It uses HTTPS 100% for free thanks to Let's Encrypt, it uses HSTS,
              doesn't allow mixed content, I sanitize the HTML input that the
              users can do via Markdown and don't allow room for any SQL
              injections.
            </LargeNotes>
          </Slide>
          <Slide>
            <Heading size={2}>
              No real database<br />
              <Mono>===</Mono>
              <br />No real database injections
            </Heading>
            <Image src={images.thinkingGif} />
            <LargeNotes>
              Because if you odn't use an actual database you can't have
              database injections right? Please note that yes there are also
              NoSQL injections but we won't have time to dig into these today.
            </LargeNotes>
          </Slide>
          <Slide bgColor="black">
            <LargeNotes>
              Turns out developing secure web applications isn 't as easy as I
              thought.
            </LargeNotes>
          </Slide>
          <Slide>
            <Image src={images.bobAllison} />
            <Heading size={2}>Bob Allison</Heading>
            <Text>Security Expert</Text>
            <LargeNotes>
              I asked my buddy Bob Allison to take a stab at the app and he
              found a bunch of vulnerabilites that I wanted to share with you
            </LargeNotes>
          </Slide>
          <Slide>
            <div>
              <LinkedImage
                src={images.onesieScreenshot}
                width="80%"
                href="https://onesie.life"
                rel="noopener noreferrer"
                target="_blank"
              />
            </div>
            <Link
              href="https://onesie.life"
              rel="noopener noreferrer"
              target="_blank"
            >
              <Text>https://onesie.life</Text>
            </Link>
            <LargeNotes>
              {' '}
              Alright so let's take a look at onesie.life. DEMO.
            </LargeNotes>
          </Slide>
          <Slide>
            <Heading size={2}>
              {codeInspect} Use <Mono>HttpOnly</Mono> Cookies
            </Heading>
            <CodePane
              lang="javascript"
              source={require('!!raw-loader!./snippets/http-only-cookie.js')}
            />
            <LargeNotes>
              You should make sure to mark cookies you don 't have to access in
              JS always as HttpOnly
            </LargeNotes>
          </Slide>
          <Slide>
            <Heading size={2}>
              {codeInspect} Use Safe <Mono>JWT</Mono> Implementations
            </Heading>
            <CodePane
              lang="javascript"
              source={require('!!raw-loader!./snippets/jwt-algorithm.js')}
            />
            <LargeNotes>
              Additionally you should make sure to have a secure, up-to-date JWT
              implementation that allows you to define the set of valid
              algorithms.
            </LargeNotes>
          </Slide>
          <Slide>
            <Heading size={2}>Let's post something!</Heading>
            <ResourceLinkWithIcon
              url="onesie.life/home"
              icon={images.icons.desktopCode}
              text="onesie.life Feed"
            />
            <LargeNotes>
              Obviously in a social network we want to be able to post some
              things. So let's jump to the feed and post something.
            </LargeNotes>
          </Slide>
          <Slide>
            <Heading size={2}>Cross Site Request Forgery</Heading>
            <ResourceLinkWithIcon
              url="hack-onesie.glitch.me/xsrf"
              icon={images.icons.hacker}
            />
            <LargeNotes>
              Now the danger of POST requests is that an attacker can use them
              to perform so call CSRF attacks. Let's take a look at how this
              works.
            </LargeNotes>
          </Slide>
          <Slide>
            <Heading size={2}>What happened?</Heading>
            <Image src={images.waitWhatGif} />
            <LargeNotes>
              Alright so before we talk about how we can protect ourselves from
              CSRF attacks, let's talk about what just happened.
            </LargeNotes>
          </Slide>
          <Slide>
            <Heading size={2}>
              <Mono>window.opener</Mono>
            </Heading>
            <CodePane
              lang="javascript"
              source={require('!!raw-loader!./snippets/opener-redirect.js')}
            />
            <LargeNotes>
              When we opened the Glitch page it was able to access the page that
              opened it and manipulate it's URL. In our case we navigated it to
              a harmless page but it could redirect it as well to a phishing
              page without the user noticing.
            </LargeNotes>
          </Slide>
          <Slide>
            <Heading size={2}>
              {codeInspect} Use <Mono>"noopener"</Mono>
            </Heading>
            <CodePane
              lang="html"
              source={require('!!raw-loader!./snippets/noopener.html')}
            />
            <LargeNotes>
              We can avoid this by using the rel attribute. noopener works in
              all modern browsers but IE and Edge. You could alternatively use a
              framebuster script however it can be easily circumvented.
            </LargeNotes>
          </Slide>
          <Slide>
            <Heading size={2}>
              Use <Mono>CSRF</Mono> Tokens
            </Heading>
            <CodePane
              className="line-numbers"
              lang="javascript"
              source={require('!!raw-loader!./snippets/csrf-tokens.js')}
            />
            <LargeNotes>
              Alright let's talk again about CSRF. Make sure to use CSRF tokens
              for your POST requests to avoid these types of attacks. Basically
              the idea is that we set a value in a cookie that is either
              transmitted via a header or via the POST body. The idea is that
              the cookie is automatically transferred but the other ones have to
              be set manually.
            </LargeNotes>
          </Slide>
          {/* <Slide>
            <Heading size={2}>What about clickjacking?</Heading>
            <LargeNotes>
              With CSRF protection in place a common way to circumvent it is
              using Clickjacking.
            </LargeNotes>
          </Slide>
          <Slide>
            <Heading size={2}>Clickjacking</Heading>
            <Layout>
              <Fill>
                <Image src={images.clickjackingDescription} width="100%" />
              </Fill>
              <Fill>
                <Image src={images.maskedIframe} width="100%" />
              </Fill>
            </Layout>
            <Link href="https://www.owasp.org/index.php/Testing_for_Clickjacking_(OTG-CLIENT-009)">
              <Text textSize="0.8rem">Source: www.owasp.org</Text>
            </Link>
            <LargeNotes>
              The idea in clickjacking is to load an iframe and lay it over the
              UI you want the user to see and believe and then set the opacity
              to 0.
            </LargeNotes>
          </Slide>
          <Slide>
            <Heading size={2}>Disallow iFraming</Heading>
            <CodePane
              lang="javascript"
              source={require('!!raw-loader!./snippets/xframe-options.js')}
            />
            <LargeNotes>
              The solution to this is actually pretty straight forward. Don 't
              allow iframing your application unless you absolutely need it for
              a feature. And even then limit the access. You can do this by
              using the x-frame-options header. I'll show you another way later.
            </LargeNotes>
          </Slide>
          <Slide>
            <Heading size={2}>X-Frame-Options Demo</Heading>
            <ResourceLinkWithIcon
              url="hack-onesie.glitch.me/frame"
              icon={images.icons.hacker}
              text="Framing Demo"
            />
            <LargeNotes>
              Let's take a quick peek at how the difference looks like.
            </LargeNotes>
          </Slide> */}
          <Slide>
            <Heading size={3}> Little Bobby Tables Young Brother </Heading>
            <Heading fit>
              <Mono>Samy '"src="javascript:alert(1);// XSS</Mono>
            </Heading>
            <LargeNotes>
              Alright let's talk about Little Bobby Tables young brother. Samy
              the XSS attack.
            </LargeNotes>
          </Slide>
          <Slide>
            <Image src={images.bobbyTables} width="100%" />
            <Link href="https://xkcd.com/327/">
              <Text>https://xkcd.com/327/</Text>
            </Link>
            <LargeNotes>
              If you don't know the story around Bobby Tables. It originates
              from an XKCD comic about SQL injections. But while most people
              have SQL injections in their mind, less people think about XSS as
              a danger. And especially not how much harder it is to block.
            </LargeNotes>
          </Slide>
          <Slide
            bgImage={images.samyWorm}
            bgSize="contain"
            bgRepeat="no-repeat"
          >
            <LargeNotes>
              This is the source code of a very famous XSS attack.
            </LargeNotes>
          </Slide>
          <Slide
            bgImage={images.samyWorm}
            bgSize="contain"
            bgRepeat="no-repeat"
            bgDarken={0.7}
          >
            <Heading size={2}>MySpace Worm</Heading>
            <Heading size={3}>Samy worm / JS.Spacehero worm</Heading>
            <LargeNotes>
              If you are not familiar with it, it's the source code of the
              MySpace worm from 2005.
            </LargeNotes>
          </Slide>
          <Slide>
            <Heading size={2}>Tricks used by Samy</Heading>
            <CodePane
              lang="html"
              source={require('!!raw-loader!./snippets/samy-move-code.html')}
            />
            <CodePane
              lang="javascript"
              source={require('!!raw-loader!./snippets/samy-join-strings.js')}
            />
            <Link
              href="http://samy.pl/popular/tech.html"
              style={{ marginTop: '2rem' }}
            >
              <Text>samy.pl/popular/tech.html</Text>
            </Link>
            <LargeNotes>
              MySpace did a lot of work trying to block XSS attacks. However,
              Samy used a bunch of tricks to get around it. These are just two
              tricks that Samy used for his XSS attack.
            </LargeNotes>
          </Slide>
          <Slide>
            <Heading size={2}>Obstrusive JavaScript</Heading>
            <CodePane
              lang="javascript"
              source={require('!!raw-loader!./snippets/obstrusive-javascript.js')}
            />
            <LargeNotes>
              Leaving aside this there is a lot of ways to achieve obstrusive
              JavaScript. This is just an example of different ways to achieve
              eval. The last one is actually generated by a project that allows
              you to write any JavaScript with just 6 characters.
            </LargeNotes>
          </Slide>
          <Slide>
            <Heading size={2}>Blocking XSS Is Not Trivial</Heading>
            <ResourceLinkWithIcon
              url="onesie.life/home"
              icon={images.icons.desktopCode}
              text="onesie.life"
            />
            <LargeNotes>
              The bottom line here is that XSS is not trivial to block. Let's
              see an example in the onesie.life app. DEMO.
            </LargeNotes>
          </Slide>
          <Slide>
            <Heading>
              Encoding can be{' '}
              <em style={{ textTransform: 'none' }}>dangerous</em>!
            </Heading>
            <LargeNotes>
              So we've seen here that encoding can be incredibly dangerous since
              it significantly increases the ways that we can approach things.
              Especially if the browser as quirkynesses like the one we've seen.
            </LargeNotes>
          </Slide>
          {/* <Slide>
            <Heading size={2}>CSS can be dangerous!</Heading>
            <ResourceLinkWithIcon
              url="codesandbox.io/s/llnzkwk0mz"
              icon={images.icons.desktopCode}
            />
            <LargeNotes>
              And not only JavaScript can be dangerous for XSS attacks. Let's
              look at an example here that is powered by React and Styled
              Components.
            </LargeNotes>
          </Slide> */}
          <Slide>
            <Heading>JSONP</Heading>
            <Heading size={3}>JSON with Padding</Heading>
            <CodePane
              lang="html"
              source={require('!!raw-loader!./snippets/jsonp-example.html')}
            />
            <LargeNotes>
              Let's talk about JSONP. It's the way that was commonly used to
              circumvent things like Same Origin Policites.
            </LargeNotes>
          </Slide>
          <Slide>
            <Heading size={2}>XSS + poor JSONP = 💖</Heading>
            <ResourceLinkWithIcon
              url="onesie.life"
              icon={images.icons.desktopCode}
            />
            <LargeNotes>
              The problem is that a poorly implemented JSONP in combination with
              an XSS vulnerability can create a very dangerous attack vector
              thanks to Service Workers. DEMO.
            </LargeNotes>
          </Slide>
          <Slide>
            <Image height="300px" src={images.icons.superhero} />
            <Heading fit>
              <Mono>Content-Security-Policy</Mono>
            </Heading>
            <LargeNotes>
              So far we've seen several different XSS attacks and we should fix
              all of these if we have them in our applications. But luckily
              there is a new superhero in town that can help us with this. The
              name of this super hero is CSP or Content-Security-Policy.
            </LargeNotes>
          </Slide>
          <Slide>
            <Heading size={2}>CSP Demo</Heading>
            <ResourceLinkWithIcon
              url="onesie.life/secure/home"
              icon={images.icons.desktopCode}
            />
            <LargeNotes>
              Let's look at the same page with CSP configured.
            </LargeNotes>
          </Slide>
          <Slide>
            <Heading size={2}>CSP Example Header</Heading>
            <CodePane
              lang="http"
              source={require('!!raw-loader!./snippets/csp-header.snippet')}
            />
            <LargeNotes>
              This is an example header how to turn on CSP.
            </LargeNotes>
          </Slide>
          <Slide>
            <Heading size={2}>
              CSP is not your<br />security strategy!
            </Heading>
            <Image src={images.icons.safetyNet} height="300px" />
            <Heading size={3}>CSP is a Safety Net!</Heading>
            <LargeNotes>
              The important thing to keep in your mind is that CSP should not be
              your security strategy but you should rather treat it as a safety
              net.
            </LargeNotes>
          </Slide>
          <Slide>
            <Heading size={2}>Other things to look out for</Heading>
            <List>
              <ListItem>
                Avoid clickjacking by disallowing framing using{' '}
                <Code>X-Frame-Options: deny</Code>
              </ListItem>
              <ListItem>
                Don't show versions of front-end libs or server
              </ListItem>
              <ListItem>
                Check for types of input(Can cause NoSQL injections)
              </ListItem>
            </List>
            <LargeNotes>
              So we've seen a bunch of things we should keep an eye on for our
              web applications. A few other ones to consider are.
            </LargeNotes>
          </Slide>
          <Slide>
            <Heading size={2}>Other things to do</Heading>
            <List>
              <ListItem>Consider Security Audits</ListItem>
              <ListItem>Stay up to date with versions (Greenkeeper)</ListItem>
              <ListItem>
                Use tools to detect security vulnerabilites (Snyk)
              </ListItem>
            </List>
            <LargeNotes>
              Additionally you should consider a regular security audit for your
              applications if you don't have a security expert on your crew.
            </LargeNotes>
          </Slide>
          <Slide>
            <Heading>
              <em style={{ textTransform: 'none' }}>Summary</em>
            </Heading>
          </Slide>
          <Slide>
            <Heading size={2}>
              Use signed <Mono>HttpOnly</Mono>
            </Heading>
          </Slide>
          <Slide>
            <Heading size={2}>
              Be sceptical of <Mono>JWT</Mono>s
            </Heading>
          </Slide>
          <Slide>
            <Heading size={2} fit>
              <Mono>rel="noopener noreferrer"</Mono>
            </Heading>
          </Slide>
          <Slide>
            <Heading size={2}>
              Use <Mono>CSRF</Mono> tokens
            </Heading>
          </Slide>
          <Slide>
            <Heading size={2}>
              Blocking <Mono>XSS</Mono> isn't trivial
            </Heading>
          </Slide>
          <Slide>
            <Heading size={2}>Be aware of encoding</Heading>
          </Slide>
          <Slide>
            <Heading size={2}>
              Be careful with <Mono>JSONP</Mono>
            </Heading>
          </Slide>
          <Slide>
            <Heading size={2}>
              Use <Mono>CSP</Mono> as a safety net
            </Heading>
          </Slide>
          <Slide>
            <Heading size={2}>Stay up to date</Heading>
          </Slide>
          <Slide>
            <ResourceLinkWithIcon
              url={SLIDE_URL}
              icon={images.icons.slideDownload}
            />
            <LargeNotes>
              If you want to take a look at the slides again, check out this
              link. I'll also tweet about it.
            </LargeNotes>
          </Slide>
          <Slide>
            <ResourceLinkWithIcon
              url="bit.ly/onesie-life"
              icon={images.icons.github}
            />
            <LargeNotes>
              Additionally you can check out the source code of the onesie.life
              page including documentation of all the vulnerabilities in the
              GitHub repo. If you find additional vulnerabilities, please feel
              free to create an issue on GitHub. I believe security is all about
              learning new things and sharing them
            </LargeNotes>
          </Slide>
          <Slide>
            <Layout>
              <Fit
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  flexDirection: 'column'
                }}
              >
                <Image src={images.meNeutral} />
                <Text style={{ marginTop: '50px' }}>
                  <S type="italic">Dominik Kundel</S>
                </Text>
              </Fit>
              <Fill
                style={{
                  marginLeft: '5rem',
                  textAlign: 'center',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between'
                }}
              >
                <Text textSize="4rem">
                  <S type="italic">Thank You!</S>
                </Text>
                <Image src={images.twilio} height="180px" />
                <div style={{ marginTop: '50px' }}>
                  <Link
                    href={'https://' + SLIDE_URL}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <Text>{SLIDE_URL}</Text>
                  </Link>
                </div>
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    marginTop: '50px',
                    textAlign: 'center'
                  }}
                >
                  <LinkedImage
                    src={images.icons.github}
                    height="80px"
                    href="https://github.com/dkundel"
                  >
                    <Text textSize="1.3rem">github/dkundel</Text>
                  </LinkedImage>
                  <LinkedImage
                    src={images.icons.twitter}
                    height="80px"
                    href="https://twitter.com/dkundel"
                  >
                    <Text textSize="1.3rem">@dkundel</Text>
                  </LinkedImage>
                  <LinkedImage
                    src={images.icons.email}
                    height="80px"
                    href="mailto:dkundel@twilio.com"
                  >
                    <Text textSize="1.3rem">dkundel@twilio.com</Text>
                  </LinkedImage>
                </div>
              </Fill>
            </Layout>
            <LargeNotes>
              With that thanks a lot for your attention. If you have any
              questions, I'll be around for the next two days at the Twilio
              booth. So feel free to come around and chat with me.
            </LargeNotes>
          </Slide>
        </Deck>
      </div>
    );
  }
}
