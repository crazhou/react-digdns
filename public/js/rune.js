(function() {
  function $(_) {
    return document.getElementById(_);
  }

  function fetchDomains(token) {
    return axios({
      baseURL : 'https://api.digitalocean.com/v2/',
      url: '/domains',
      method: 'get',
      headers: {
        'Content-Type':'application/json',
        'Authorization' : 'Bearer ' + token,
      }
    });
  }

  if(Loginuser && Loginuser.access_token) {
    fetchDomains(Loginuser.access_token).then(function(resp) {
      if(resp.status === 200 && resp.data) {
        var total = resp.data.meta.total;
        $('countDo').innerHTML = total + '个域名';
      }
    })
  }

  const ADD_TODO = 'ADD_TODO'

  function addTodo(text) {
    return {
      type : ADD_TODO,
      text
    }
  }

  const initialState = {
    visibilityFilter: VisibilityFilters.SHOW_ALL,
    todos: []
  };

  function todos(state = [], action) {
    switch (action.type) {
      case ADD_TODO:
        return [
          ...state,
          {
            text:action.text,
            completed: false
          }
        ];
      case TOGGLE_TODO:
        return state.map((todo, index) => {
          if (index === action.index) {
            return Object.assign({}, todo, {
              completed: !todo.completed
            })
          }
          return todo
        })
      default:
        return state;
    }
  }

  function todoApp(state = initialState, action) {
      switch (action.type) {
        case SET_VISIBILITY_FILTER:
          return Object.assign({}, state, {
            visibilityFilter: action.filter
          })
        case ADD_TODO:
          return Object.assign({}, state, {
            todos: todos(state.todos, action)
          })
        case TOGGLE_TODO:
          return Object.assign({}, state, {
            todos: todos(state.todos, action)
          })
        default:
          return state
      }
  }



  


})();