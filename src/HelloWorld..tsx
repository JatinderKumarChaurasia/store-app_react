import {FormEvent, useState} from "react";
import findTerm from "./Finder";

const HelloWorld = () => {
    const [term,setTerm] = useState('')
    const [got_data,set_got_data] = useState<any>('')
    const onSubmit = (e: FormEvent) => {
        console.log(term)
        console.log('Hello World')
        e.preventDefault()
        findTerm(term).then(r=> set_got_data(r.data.articles))
    }
    return (
      <div>
          <p className='text-xl font-sans italic'>Hello World</p>
          <form onSubmit={onSubmit}>
              <input type='text' className='border bg-blue-300' name='term' onChange={(e) => setTerm(e.target.value) } placeholder='Enter term to search'/>
              <button>Find Things</button>
          </form>
          <div className={'columns-4 gap-1 bg-contain gap-y-1 border-b-amber-700'}>
              {got_data && got_data.map((value:any,index:any) => {
                  return <div className="max-w-sm bg-white rounded-lg border border-gray-200 m-2 shadow-md dark:bg-gray-800 dark:border-gray-700">
                      <a href="#">
                          <img className="rounded-t-lg" src={value.urlToImage} alt={value.title}/>
                      </a>
                      <div className="p-5">
                          <a href="#">
                              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{value.title}</h5>
                          </a>
                          <p className={'mb-3 font-sans text-gray-50'}>{value.source.name} | {value.publishedAt}</p>
                          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{value.description}</p>
                          <a href={value.url}
                             className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                              Read more
                              <svg className="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20"
                                   xmlns="http://www.w3.org/2000/svg">
                                  <path fillRule="evenodd"
                                        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                                        clipRule="evenodd"></path>
                              </svg>
                          </a>
                      </div>
                  </div>
              })}
          </div>

          {/*<table>*/}
          {/*    <thead>*/}
          {/*    <tr>*/}
          {/*        <th>Author Name</th>*/}
          {/*        <th>Title</th>*/}
          {/*        <th>Description</th>*/}
          {/*        <th>Content</th>*/}
          {/*        <th>Published At</th>*/}
          {/*        <th>Source Name</th>*/}
          {/*    </tr>*/}
          {/*    </thead>*/}
          {/*    <tbody>*/}
          {/*    {got_data && got_data.map((value:any,index:any) => {*/}
          {/*        return <tr key={index}>*/}
          {/*            <td>{value.author}</td>*/}
          {/*            <td>{value.title}</td>*/}
          {/*            <td>{value.description}</td>*/}
          {/*            <td>{value.content}</td>*/}
          {/*            <td>{value.publishedAt}</td>*/}
          {/*            <td>{value.source.name}</td>*/}
          {/*            <td>{value.url}</td>*/}
          {/*            <td><img src={value.urlToImage} key={index} alt={value.title}/></td>*/}

          {/*        </tr>//<p key={index}>{value.author}</p>*/}
          {/*    })}*/}
          {/*    </tbody>*/}
          {/*</table>*/}

      </div>
  )
}

export default HelloWorld
