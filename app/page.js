import {list} from '../lib/content';import Site from '../components/Site';
export default function Home(){return <Site poems={list('poetry')} articles={list('writing')} fiction={list('fiction')}/>;}
