import fetch from "cross-fetch";

export const REQUEST_POSTS = "REQUEST_POSTS";
export const RECEIVE_POSTS = "RECEIVE_POSTS";
export const SELECT_SUBREDDIT = "SELECT_SUBREDDIT";
export const INVALIDATE_SUBREDDIT = "INVALIDATE_SUBREDDIT";

/*
 * 选择一个子主题 subreddit 为主题
 */
export function selectSubreddit(subreddit) {
  return {
    type: SELECT_SUBREDDIT,
    subreddit
  };
}

/*
 * 刷新当前关键词的帖子
 */
export function invalidateSubreddit(subreddit) {
  return {
    type: INVALIDATE_SUBREDDIT,
    subreddit
  };
}
/*
 * 判断一个分类是否需要更新，有需要就更新一下
 * 参数一 dispatch, getState 
 */
export function fetchPostsIfNeeded(subreddit) {
  return (dispatch, getState) => {
    if (shouldFetchPosts(getState(), subreddit)) {
      return dispatch(fetchPosts(subreddit));
    }
  };
}
/*
 * 开始请求帖子
 */
function requestPosts(subreddit) {
  return {
    type: REQUEST_POSTS,
    subreddit
  };
}

/*
 * 接收帖子的数据 
 */
function receivePosts(subreddit, json) {
  return {
    type: RECEIVE_POSTS,
    subreddit,
    posts: json.data.children.map(child => child.data),
    receivedAt: Date.now()
  };
}

/*
 * 请求帖子具体数据 返回一个函数，第一个参数为 dispatch 
 */
function fetchPosts(subreddit) {
  return dispatch => {
    dispatch(requestPosts(subreddit));
    return fetch(`https://www.reddit.com/r/${subreddit}.json`)
      .then(response => response.json())
      .then(json => dispatch(receivePosts(subreddit, json)));
  };
}
/*
 * 判断这个分类下是否需要更新
 */
function shouldFetchPosts(state, subreddit) {
  const posts = state.postsBySubreddit[subreddit];

  if (!posts) {
    return true;
  } else if (posts.isFetching) {
    return false;
  } else {
    return posts.didInvalidate;
  }
}
