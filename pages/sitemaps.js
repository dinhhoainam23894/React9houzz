import Document from 'next/document'
const APIURL = process.env.DOMAIN + process.env.APIURI + 'sitemaps'
import 'isomorphic-fetch'

export default class extends Document{
    static async getInitialProps() {
        const res = await fetch(APIURL)
        const data = await res.json()
        return {
            data : data
        }
    }
    constructor(props){
        super(props)
    }
    render(){
        return (<span dangerouslySetInnerHTML={{ __html: `<xml>${this.props.data.content} </xml>` }}/>);
    }
}