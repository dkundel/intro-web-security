/* eslint import/no-webpack-loader-syntax: off */

// Import React
import React from 'react';
import styled from 'styled-components';

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
          @{twitter}
        </a>{' '}
        | {hashtags}{' '}
      </p>
    </footer>
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
  samyWorm: require('./assets/samy-worm.png')
};

export default class Presentation extends React.Component {
  render() {
    return (
      <div>
        <Footer
          name="Dominik Kundel"
          twitter="dkundel"
          hashtags="#angularConnect"
        />
        <Deck theme={theme} progress="bar">
          <Slide>
            <Heading size={3}> Introduction to </Heading>
            <Heading> Web Security </Heading>
          </Slide>
          <Slide> Intro Slides </Slide>
          <Slide bgImage={images.onesieJs} bgDarken={0.5}>
            <Heading> #onesiejs </Heading>
            <Notes>
              I'm a member of a group of onesie loving JavaSCript developers
            </Notes>
          </Slide>
          <Slide>
            Slide of social network images
            <Notes>
              Today we have so many social networks and communication
              channels.But there isn 't really one for onesie loving developers.
            </Notes>
          </Slide>
          <Slide>
            Slide of social network images with onesie life
            <Notes>
              So I did what every developer would do and built one myself.
              Introducing onesie.life
            </Notes>
          </Slide>
          <Slide>
            <Heading> Security!Security!Security! </Heading>
            <Notes>
              Being an experienced developer I obviously made sure that this
              application is as secure as possible.
            </Notes>
          </Slide>
          <Slide>
            <List>
              <ListItem> Only HTTPS, no mixed content </ListItem>
              <ListItem> It even uses HSTS </ListItem>
              <ListItem> No room for SQL injections </ListItem>
            </List>
          </Slide>
          <Slide>
            Slide of gif with person being smart{' '}
            <Heading>
              {' '}
              No real database === No real database injections{' '}
            </Heading>{' '}
          </Slide>
          <Slide>
            Blank Slide
            <Notes>
              Turns out developing secure web applications isn 't as easy as I
              thought.
            </Notes>
          </Slide>
          <Slide>
            Image of alter ego
            <Notes>
              I asked my buddy Bob Allison to take a stab at the app and he
              found a bunch of vulnerabilites that I wanted to share with you
            </Notes>
          </Slide>
          <Slide>
            Screenshot of Onesie.life
            <Link
              href="https://onesie.life"
              rel="noopener noreferrer"
              target="_blank"
            >
              onesie.life
            </Link>
            <Notes> Alright so let 's take a look at onesie.life</Notes>
          </Slide>
          <Slide>
            <Heading>
              Use <Code> HttpOnly </Code> Cookies
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
            <Heading>
              Use Safe <Code> JWT </Code> Implementations
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
            <Heading> Let 's post something!</Heading>
            <Link
              href="https://onesie.life"
              rel="noopener noreferrer"
              target="_blank"
            >
              onesie.life Feed
            </Link>
          </Slide>
          <Slide>
            <Heading> What happened ? </Heading>
          </Slide>
          <Slide>
            <Heading> window.opener </Heading>
          </Slide>
          <Slide>
            <CodePane
              lang="html"
              source={require('!!raw-loader!./snippets/noopener.html')}
            />
          </Slide>
          <Slide>
            <Heading>
              Use <Code> CSRF </Code> Tokens
            </Heading>
            <CodePane
              lang="javascript"
              source={require('!!raw-loader!./snippets/csrf-tokens.js')}
            />
            <Notes>
              Make sure to use CSRF tokens for your POST requests to avoid Cross
              Site Request Forgery
            </Notes>
          </Slide>
          <Slide>
            <Heading> What about clickjacking ? </Heading>
          </Slide>
          <Slide>
            <Heading> Disallow iFraming </Heading>
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
            <Heading>X-Frame-Options Demo </Heading>
            <Link
              href="https://iframe-example.glitch.me"
              rel="noopener noreferrer"
              target="_blank"
            >
              Demo
            </Link>
          </Slide>
          <Slide>
            <Heading size={2}> Little Bobby Tables Young Brother </Heading>
            <Heading> Samy '"src="javascript:alert(1);// XSS</Heading>
          </Slide>
          <Slide>
            <Image src={images.bobbyTables} />
            <Link href="https://xkcd.com/327/">
              <Text>https://xkcd.com/327/</Text>
            </Link>
          </Slide>
          <Slide><Image src={images.samyWorm} width="100%" /></Slide>
          <Slide>
            <Heading>Tricks used by Samy</Heading>
            <CodePane
              lang="html"
              source={require('!!raw-loader!./snippets/samy-move-code.html')}
            />
            <CodePane
              lang="javascript"
              source={require('!!raw-loader!./snippets/samy-join-strings.js')}
            />
            <Link href="http://samy.pl/popular/tech.html"><Text>samy.pl/popular/tech.html</Text></Link>
          </Slide>
          <Slide>
            <Heading> Obstrusive JavaScript </Heading>
            <CodePane lang="javascript" source={require('!!raw-loader!./snippets/obstrusive-javascript.js')} />
          </Slide>
          <Slide>
            <Heading> Blocking XSS Is Not Trivial </Heading>
            <Link
              href="https://onesie.life"
              rel="noopener noreferrer"
              target="_blank"
            >
              -- > onesie.life
            </Link>
          </Slide>
          <Slide>
            <Heading>Encoding can be dangerous!</Heading>
          </Slide>
          <Slide>
            <Heading> CSS can be dangerous! </Heading>
            <Link href="https://codesandbox.io/s/llnzkwk0mz"><Text>codesandbox.io/s/llnzkwk0mz</Text></Link>
          </Slide>
          <Slide>
            <Heading> JSON with Padding(JSONP) </Heading>
          </Slide>
          <Slide>
            <Heading> XSS + poor JSONP = 💖 </Heading>
            <Link
              href="https://onesie.life"
              rel="noopener noreferrer"
              target="_blank"
            >
              Demo
            </Link>
          </Slide>
          <Slide>
            <Heading size={2}> Content - Security - Policy </Heading>
            <Heading size={2}> to the rescue! </Heading>
          </Slide>
          <Slide>
            <Heading> Demo </Heading>
            <Link
              href="https://onesie.life"
              rel="noopener noreferrer"
              target="_blank"
            >
              onesie.life
            </Link>
          </Slide>
          <Slide>
            <Heading> CSP Example Header </Heading>
            <CodePane
              lang="http"
              source={require('!!raw-loader!./snippets/csp-header.snippet')}
            />
          </Slide>
          <Slide>
            <Heading> CSP is not your security! </Heading>
            <Heading> CSP is a Safety Net! </Heading>
          </Slide>
          <Slide>
            <Heading> Other things to look out for </Heading>
            <List>
              <ListItem>
                Don 't show versions of front-end libs or server
              </ListItem>
              <ListItem>
                Check for types of input(Can cause NoSQL injections)
              </ListItem>
              <ListItem> Consider Security Audits </ListItem>
            </List>
          </Slide>
          <Slide>
            <Heading> Other things to do </Heading>
            <List>
              <ListItem>Stay up to date with versions(Greenkeeper)</ListItem>
              <ListItem>
                Use tools to detect security vulnerabilites(Snyk)
              </ListItem>
            </List>
          </Slide>
          <Slide>
            <Text>Summary</Text>
          </Slide>
        </Deck>
      </div>
    );
  }
}
