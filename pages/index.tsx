import Head from 'next/head';
import {ReactNode} from 'react';
import style9 from 'style9';

const styles = style9.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
    paddingLeft: '.5rem',
    paddingRight: '.5rem',
  },
})

export default function Home() {
  return (
    <div className={styles('container')}>
      <Head>
        <title>Create Next App</title>
      </Head>

      <main>
        <Title>
          Hello world!
        </Title>
      </main>
    </div>
  );
}

type Props = {
  children?: ReactNode;
};

function Title({children, } : Props) {
  return (
    <h1
      css={{
        color: 'red',
        margin: 0,
        lineHeight: 1.15,
        fontSize: '4rem',
        textAlign: 'center'
      }}
    >
      {children}
    </h1>
  );
}

// export const shared = { ...styles };
