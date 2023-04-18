import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AddReactionIcon from '@mui/icons-material/AddReaction';
import { makeStyles } from '@material-ui/core/styles';
import {
  Container,
  Typography,
  List,
  ListItem,
  ListItemText,
} from '@material-ui/core';


const useStyles = makeStyles(theme => ({
    container: {
      marginTop: theme.spacing(4),
    },
    title: {
      marginBottom: theme.spacing(4),
      marginLeft:theme.spacing(9),
    },
    Typoicon:{
        marginLeft:theme.spacing(4),

    }

  }));
  const Posts = () => {
    const classes = useStyles();
    const [posts, setPosts] = useState([]);
  
    useEffect(() => {
      const fetchPosts = async () => {
        const response = await axios.get('https://dummyjson.com/posts');
      const data=response.data.posts
      setPosts(data);
      };
  
      fetchPosts();
    }, []);
  
    return (
      <Container maxWidth="sm" className={classes.container}>
        <Typography variant="h3" component="h3" className={classes.title}>
          Post title
        </Typography>
        <List>
          {posts.map(post => (
            <ListItem key={post.id}>
              {/* <ListItemText primary={post.title} secondary={post.body} /> */}
                    <ListItemText
        
        primary={post.title}

        secondary={
            <>
              <Typography component="span" variant="subtitle1">{post.body}</Typography> <br/>
    

              <Typography component="span" variant="body2" > Tags:-{post.tags[0] } {post.tags[1]} {post.tags[2]}
</Typography>

<AddReactionIcon fontSize="small" className={classes.Typoicon}/><Typography component="span" variant="body3" >{post.reactions}</Typography>

            </>
          }
      />
    </ListItem>


            
          ))}
        </List>
      </Container>
    );
  };
  export default Posts;
    