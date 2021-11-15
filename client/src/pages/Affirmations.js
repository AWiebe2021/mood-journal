import React, {useState} from 'react';
import { Redirect, useParams } from 'react-router-dom';
import { Layout, Button, List } from 'antd'
import { useQuery } from '@apollo/client';
import { QUERY_USER, QUERY_ME } from '../utils/queries';
import { DownloadOutlined } from '@ant-design/icons'

import Auth from '../utils/auth';
const config = {
    apiUrl: 'https://type.fit/api/quotes',
    repoUrl: 'https://github.com/ssokurenko/quotes-react-app'
  }
  
  const { Header, Content } = Layout
  
  const Affirmations = () => {
    const [quotes, setQuotes] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const Quote = ({ text, author }) => {
      return (
        <span>
          <strong>{text}</strong> &nbsp; <span>{author}</span>
        </span>
      )
    }

//     var JSONArray = { :["inbound"] };
// var stdArray = JSON.parse(JSONArray);
// var result = stdArray[0];
  
    const getQuotes = () => {
      fetch(config.apiUrl)
        .then(function (response) {
          return response.json()
        })
        .then((data) => {
          setQuotes(data)
          setIsLoading(false)
        })
        .catch(() => {
          setIsLoading(false)
        })
    }
    
    return (
      <Layout>
        <Header>
          <div className="card-header">
            <span className="site-logo">Get an Affirmation</span>
          </div>
        </Header>
        <Content className="card">
          <List
            size="small"
            loading={isLoading}
            bordered
            dataSource={quotes}
            renderItem={(quote) => (
              <List.Item>
                <Quote text={quote.text} author={quote.author} />
              </List.Item>
              
            )}
            />
               <Button className="btn col-12 col-md-3"
                onClick={() => getQuotes()}
                type="primary"
                disabled={isLoading}
                size="large">
                Generate
              </Button>
        </Content>
      </Layout>
    )
  }

export default Affirmations;