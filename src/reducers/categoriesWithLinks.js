const categoriesWithLinks = (state = [], action) => {
  const allLinks = getLinks()
  switch (action.type) {
    case 'GET_ALL_CATEGORIES_WITH_LIKS':
      return allLinks // TODO: make spread operator work --> [allLinks...] (not necesary here)
    default:
      return allLinks // TODO: default should return actual state
  }
}

export default categoriesWithLinks


function getLinks(){
  const list = [
    {
      _id: "56fd6fb1a19b6f0f00782c9e",
      link: "link-bot.herokuapp.com/api",
      __v: 0,
      updatedAt: "2016-03-31T18:42:57.919Z",
      createdAt: "2016-03-31T18:42:57.889Z",
      createdBy: {
        user: {
          id: "U0E7WLFN0",
          name: "mcarrera"
        },
        channel: {
          id: "C0JHEMKL6",
          name: "dev"
        },
        team: {
          id: "T06TK83R9",
          domain: "los-pibes"
        }
      },
      tags: [
        "api"
      ],
      categories: [
        "important"
      ]
    },
    {
      _id: "56fda1355eba640f004dedeb",
      link: "https://github.com/xgrommx/awesome-redux",
      __v: 0,
      updatedAt: "2016-03-31T22:14:13.783Z",
      createdAt: "2016-03-31T22:14:13.766Z",
      createdBy: {
        user: {
          id: "U06TK7U78",
          name: "gillchristian"
        },
        channel: {
          id: "D0EAM8YJC",
          name: "directmessage"
        },
        team: {
          id: "T06TK83R9",
          domain: "los-pibes"
        }
      },
      tags: [
        "react",
        "redux",
        "resources"
      ],
      categories: [
        "redux"
      ]
    }
  ];
  return [
    {
      heading: 'important',
      list
    },
    {
      heading: 'angular',
      color: '#b52e31',
      list
    },
    {
      heading: 'react',
      color: '#00d8ff',
      list
    }]
}


/*
    color: '#b52e31',
    heading: 'angular',
    <LinksList links={this.state.links} heading='important'/>
    <LinksList links={this.state.links} heading='random' color='#33b8b8'/>
    <LinksList links={this.state.links} heading='js' color='#efe06f'/>
    <LinksList links={this.state.links} heading='react' color='#00d8ff'/>
*/

  /*
  import axios from 'axios';
  // TODO: move state handling to redux
	componentDidMount(){
    axios.get(this.props.src)
      .then(response => {
        this.setState({links: response.data});
      })
	}
  */
