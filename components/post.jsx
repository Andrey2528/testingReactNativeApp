import style from 'styled-components/native';

const PostView = style.View`
  margin-top: 25px;
  flex-direction: row;
  padding: 15px;
  border-bottom-width: 1px;
  border-bottom-color: rgba(0, 0, 0, 0.1);
  border-bottom-style: solid;
`;

const PostImage = style.Image`
  width: 60px;
  height: 60px;
  border-radius: 12px;
  margin-right: 12px;
`; 

const PostDetails = style.View`
    flex: 1;
  justify-content: center;
`;

const PostTitle = style.Text`
  font-size: 16px;
  font-weight: bold;
`;

const PostDate = style.Text`
  font-size: 12px;
  color: rgba(0, 0, 0, 0.4);
  margin-top: 2px;
`;

export const Post = ({ title, imageUrl, createDate }) => {
    return <PostView>
    <PostImage
      source={{ uri: imageUrl }}
    />
    <PostDetails>
      <PostTitle>{title}</PostTitle>
      <PostDate>{createDate}</PostDate>
    </PostDetails>
  </PostView>
}