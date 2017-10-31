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
      <div style={{marginBottom: '1rem'}}>
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
            <Heading size={2}><Mono>¯\_(ツ)_/¯</Mono></Heading>
            <Heading size={4}>Dominik Kundel - <Link href="https://twitter.com/dkundel">@dkundel</Link></Heading>
          </Slide>
          <Slide bgImage={images.matrixWallpaper} bgDarken={0.5}>
            <Image src={images.icons.webSecurity} height={200} />
            <Heading size={3}>Introduction to</Heading>
            <Heading size={2}>Web Security</Heading>
            <Heading size={4}>Dominik Kundel - <Link href="https://twitter.com/dkundel">@dkundel</Link></Heading>
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
            <Notes>
              I'm a member of a group of onesie loving JavaScript developers
            </Notes>
          </Slide>
          <Slide bgImage={images.socialMediaWallpaper}>
            <Notes>
              Today we have so many social networks and communication
              channels.But there isn 't really one for onesie loving developers.
            </Notes>
          </Slide>
          <Slide bgImage={images.socialMediaWallpaper} bgDarken={0.5}>
            <Image src={images.onesieScreenshot} width="70%" />
            <Notes>
              So I did what every developer would do and built one myself.
              Introducing onesie.life
            </Notes>
          </Slide>
          <Slide>
            <Heading size={2}>Security! Security! Security!</Heading>
            <Image src={images.hackerGif} />
            <Notes>
              Being an experienced developer I obviously made sure that this
              application is as secure as possible.
            </Notes>
          </Slide>
          <Slide>
            <Heading size={2}>I thought of everything</Heading>
            <List>
              <ListItem>Only HTTPS, no mixed content </ListItem>
              <ListItem>It even uses HSTS (HTTP Strict Transport Security)</ListItem>
              <ListItem>No room for SQL injections </ListItem>
              <ListItem>Sanitized HTML</ListItem>
            </List>
          </Slide>
          <Slide>
            <Heading size={2}>
              No real database<br />
              <Mono>===</Mono>
              <br />No real database injections
            </Heading>
            <Image src={images.thinkingGif} />
          </Slide>
          <Slide bgColor="black">
            <Notes>
              Turns out developing secure web applications isn 't as easy as I
              thought.
            </Notes>
          </Slide>
          <Slide>
            <Image src={images.bobAllison} />
            <Heading size={2}>Bob Allison</Heading>
            <Text>Security Expert</Text>
            <Notes>
              I asked my buddy Bob Allison to take a stab at the app and he
              found a bunch of vulnerabilites that I wanted to share with you
            </Notes>
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
            <Notes> Alright so let 's take a look at onesie.life</Notes>
          </Slide>
          <Slide>
            <Heading size={2}>
              {codeInspect} Use <Mono>HttpOnly</Mono> Cookies
            </Heading>
            <CodePane
              lang="javascript"
              source={require('!!raw-loader!./snippets/http-only-cookie.js')}
            />
            <Notes>
              You should make sure to mark cookies you don 't have to access in
              JS always as HttpOnly
            </Notes>
          </Slide>
          <Slide>
            <Heading size={2}>
              {codeInspect} Use Safe <Mono>JWT</Mono> Implementations
            </Heading>
            <CodePane
              lang="javascript"
              source={require('!!raw-loader!./snippets/jwt-algorithm.js')}
            />
            <Notes>
              Additionally you should make sure to have a secure, up - to - date
              JWT implementation that allows you to define the set of valid
              algorithms.
            </Notes>
          </Slide>
          <Slide>
            <Heading size={2}>Let's post something!</Heading>
            <ResourceLinkWithIcon
              url="onesie.life/home"
              icon={images.icons.desktopCode}
              text="onesie.life Feed"
            />
          </Slide>
          <Slide>
            <Heading size={2}>Cross Site Request Forgery</Heading>
            <ResourceLinkWithIcon
              url="hack-onesie.glitch.me/xsrf"
              icon={images.icons.hacker}
            />
          </Slide>
          <Slide>
            <Heading size={2}>What happened?</Heading>
            <Image src={images.waitWhatGif} />
          </Slide>
          <Slide>
            <Heading size={2}>
              <Mono>window.opener</Mono>
            </Heading>
            <CodePane
              lang="javascript"
              source={require('!!raw-loader!./snippets/opener-redirect.js')}
            />
          </Slide>
          <Slide>
            <Heading size={2}>
              {codeInspect} Use <Mono>"noopener"</Mono>
            </Heading>
            <CodePane
              lang="html"
              source={require('!!raw-loader!./snippets/noopener.html')}
            />
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
            <Notes>
              Make sure to use CSRF tokens for your POST requests to avoid Cross
              Site Request Forgery
            </Notes>
          </Slide>
          <Slide>
            <Heading size={2}>What about clickjacking?</Heading>
          </Slide>
          <Slide>
            <Heading size={2}>Clickjacking</Heading>
            <Layout>
              <Fill>
                <Image src={images.clickjackingDescription} width="100%" />
              </Fill>
              <Fill>
                <Image src={images.maskedIframe} width="100%"/>
              </Fill>
            </Layout>
              <Link href="https://www.owasp.org/index.php/Testing_for_Clickjacking_(OTG-CLIENT-009)"><Text textSize="0.8rem">Source: www.owasp.org</Text></Link>
          </Slide>
          <Slide>
            <Heading size={2}>Disallow iFraming</Heading>
            <CodePane
              lang="javascript"
              source={require('!!raw-loader!./snippets/xframe-options.js')}
            />
            <Notes>
              Don 't allow iframing your application unless you absolutely need
              it for a feature.And even then limit the access
            </Notes>
          </Slide>
          <Slide>
            <Heading size={2}>X-Frame-Options Demo</Heading>
            <ResourceLinkWithIcon
              url="hack-onesie.glitch.me/frame"
              icon={images.icons.hacker}
              text="Framing Demo"
            />
          </Slide>
          <Slide>
            <Heading size={3}> Little Bobby Tables Young Brother </Heading>
            <Heading fit>
              <Mono>Samy '"src="javascript:alert(1);// XSS</Mono>
            </Heading>
          </Slide>
          <Slide>
            <Image src={images.bobbyTables} width="100%" />
            <Link href="https://xkcd.com/327/">
              <Text>https://xkcd.com/327/</Text>
            </Link>
          </Slide>
          <Slide
            bgImage={images.samyWorm}
            bgSize="contain"
            bgRepeat="no-repeat"
          />
          <Slide
            bgImage={images.samyWorm}
            bgSize="contain"
            bgRepeat="no-repeat"
            bgDarken={0.7}
          >
            <Heading size={2}>MySpace Worm</Heading>
            <Heading size={3}>Samy worm / JS.Spacehero worm</Heading>
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
            <Link href="http://samy.pl/popular/tech.html" style={{marginTop: '2rem'}}>
              <Text>samy.pl/popular/tech.html</Text>
            </Link>
          </Slide>
          <Slide>
            <Heading size={2}>Obstrusive JavaScript</Heading>
            <CodePane
              lang="javascript"
              source={require('!!raw-loader!./snippets/obstrusive-javascript.js')}
            />
          </Slide>
          <Slide>
            <Heading size={2}>Blocking XSS Is Not Trivial</Heading>
            <ResourceLinkWithIcon
              url="onesie.life/home"
              icon={images.icons.desktopCode}
              text="onesie.life"
            />
          </Slide>
          <Slide>
            <Heading>
              Encoding can be{' '}
              <em style={{ textTransform: 'none' }}>dangerous</em>!
            </Heading>
          </Slide>
          <Slide>
            <Heading size={2}>CSS can be dangerous!</Heading>
            <ResourceLinkWithIcon
              url="codesandbox.io/s/llnzkwk0mz"
              icon={images.icons.desktopCode}
            />
          </Slide>
          <Slide>
            <Heading>JSONP</Heading>
            <Heading size={3}>JSON with Padding</Heading>
          </Slide>
          <Slide>
            <Heading size={2}>XSS + poor JSONP = 💖</Heading>
            <ResourceLinkWithIcon
              url="onesie.life"
              icon={images.icons.desktopCode}
            />
          </Slide>
          <Slide>
            <Image height="300px" src={images.icons.superhero} />
            <Heading fit>
              <Mono>Content-Security-Policy</Mono>
            </Heading>
          </Slide>
          <Slide>
            <Heading size={2}>CSP Demo</Heading>
            <ResourceLinkWithIcon
              url="onesie.life/secure/home"
              icon={images.icons.desktopCode}
            />
          </Slide>
          <Slide>
            <Heading size={2}>CSP Example Header</Heading>
            <CodePane
              lang="http"
              source={require('!!raw-loader!./snippets/csp-header.snippet')}
            />
          </Slide>
          <Slide>
            <Heading size={2}>
              CSP is not your<br />security strategy!
            </Heading>
            <Image src={images.icons.safetyNet} height="300px" />
            <Heading size={3}>CSP is a Safety Net!</Heading>
          </Slide>
          <Slide>
            <Heading size={2}>Other things to look out for</Heading>
            <List>
              <ListItem>
                Don't show versions of front-end libs or server
              </ListItem>
              <ListItem>
                Check for types of input(Can cause NoSQL injections)
              </ListItem>
              <ListItem>Consider Security Audits</ListItem>
            </List>
          </Slide>
          <Slide>
            <Heading size={2}>Other things to do</Heading>
            <List>
              <ListItem>Stay up to date with versions (Greenkeeper)</ListItem>
              <ListItem>
                Use tools to detect security vulnerabilites (Snyk)
              </ListItem>
            </List>
          </Slide>
          <Slide>
            <Text>Summary</Text>
          </Slide>
          <Slide>
            <ResourceLinkWithIcon
              url={SLIDE_URL}
              icon={images.icons.slideDownload}
            />
          </Slide>
          <Slide>
            <ResourceLinkWithIcon
              url="github.com/dkundel/onesie-life"
              icon={images.icons.github}
            />
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
          </Slide>
        </Deck>
      </div>
    );
  }
}
