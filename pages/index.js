import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
// import fetch from 'isomorphic-unfetch'
import {GRAPHQL_API, GET_CHARACTER_QUERY} from "../utils/queries";
import {useEffect, useState} from "react";
import Characters from "./characters";
import Navigation from "../components/nav";

export default function Home() {
    return (
        <div>
            <Navigation/>
            {/*<Characters/>*/}
            <h1>hello world</h1>
        </div>
    )
}
