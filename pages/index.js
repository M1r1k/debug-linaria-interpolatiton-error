import Head from 'next/head'
import Layout from '../Layout';
import { styled } from 'linaria/react'
import { css } from 'linaria'
import staticVariables from '../staticVariables';

const Box = styled.div`
  margin-top: 40px;
  margin-left: 40px;
  height: 200px;
  width: 200px;
  background-color: tomato;
  animation: spin 2s linear infinite;

  @keyframes spin {
    from {
      transform: rotate(0deg);
    }

    to {
      transform: rotate(360deg);
    }
  }
`

const anotherClass = css`
  color: ${staticVariables.redColor};
`

export default function Home() {
  return (
    <>
      <Head>
        <title>With Linaria</title>
      </Head>
      <Layout>
        <Box className={anotherClass}>Zero runtime CSS in JS</Box>
      </Layout>
    </>
  )
}
