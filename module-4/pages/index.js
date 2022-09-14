import Head from 'next/head';
import Link from 'next/link';
import Layout from '../components/layout';
import { getSortedList } from '../lib/data';

export async function getStaticProps() {
  const allData = getSortedList();
  return {
    props: {
      allData
    }
  }
}
export default function Home({ allData }) {
  return (
      <Layout home>
        <h1>List of Authors</h1>
          <p>Listed by Job</p>
        <div className="list-group">
          {allData.map(({ id, author, job }) => (
            <Link key={id} href={`/${id}`}>
              <a className="list-group-item list-group-item-action">{author}, {job}</a>
            </Link>
          ))}
        </div>
      </Layout>
  );
}
