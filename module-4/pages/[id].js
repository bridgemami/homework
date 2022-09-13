import Head from 'next/head';
//getAllIds is a function from lib/data.js
import { getAllIds, getData } from '../lib/data';

//create an instance of the getStaticProps() to return data for one person
export async function getStaticProps({params}) {
    const itemData = await getData(params.id);
    return  {
        props: {
            itemData
        }
    }
}

//create an instance of the getStaticPaths() to report next all possible dynamic urls
export async function getStaticPaths() {
const allDynamicPaths = getAllIds();
return {
    allDynamicPaths,
    fallback: false
};
}

// make a react component to display all details about a person when a dynamic route matches, like id 1 or id 2
export default function Entry ({itemData}) {
    <article class= "card col-4">
        <div class="card-body">
            <h5 class="card-title">
               {itemData.author} </h5>
               <h6 class="card-subtitle mb-3 text-muted">{itemData.quote}</h6>
            </div>
        </article>
}