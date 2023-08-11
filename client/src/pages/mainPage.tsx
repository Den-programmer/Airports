import React from 'react'
import AirportSearch from '../components/AirportSearch'
import AirportFilter from '../components/AirportFilter'
import AirportCard from '../components/AirportCard'

interface IProps {

}

const MainPage: React.FC<IProps> = (props) => {
  // const [limit, setLimit] = useState<number>(100)
  // const dispatch = useAppDispatch()
  // useEffect(() => {
  //   dispatch(fetchAirports())
  // }, [])
  // const { data: posts, error, isLoading } = postAPI.useFetchAllPostsQuery(limit)
  // const [createPost, { error: createError, isLoading: isCreateLoading }] = postAPI.useCreatePostMutation()
  // const [mainError, setMainError] = useState<any>(undefined)
  // const [updatePost] = postAPI.useUpdatePostMutation()
  // const [deletePost, { isLoading: isDeletingLoading }] = postAPI.useDeletePostMutation()

  // const handleCreate = async () => {
  //   try {
  //     const title = prompt()
  //     if (title) {
  //       await createPost({ title, body: title })
  //       setMainError('')
  //     }
  //   } catch (e) {
  //     setMainError(createError && createError)
  //   }
  // }

  return (
    <div className='container-md mx-auto pt-5'>
      <AirportSearch />
      <AirportFilter />
      <AirportCard />



      {/* {mainError && mainError}
      <button disabled={isCreateLoading} onClick={handleCreate}>{isCreateLoading ? 'Adding new post' : 'Add new post'}</button>
      {isLoading && <h1>Loading...</h1>}
      {error && <h1>Error has occuried!</h1>}
      {posts && posts.map((post: IPost) => {
        const handleUpdate = async () => {
          try {
            const title = prompt()
            title && await updatePost({ ...post, title })
            setMainError('')
          } catch(err) {
            setMainError("Failed to update post with id: " + post.id)
          }
        }

        const handleDelete = async (e: React.MouseEvent<HTMLElement>) => {
          e.stopPropagation()
          try {
            await deletePost(post)
            setMainError('')
          } catch(err) {
            setMainError("Failed to delete an element with id: " + post.id)
          }
        }
        return <div onClick={handleUpdate} key={post.id}>
          <p>{post.title}</p>
          <p>{post.body}</p>
          <button disabled={isDeletingLoading} onClick={handleDelete}>{isDeletingLoading ? 'Deleting' : 'Delete'}</button>
        </div>
      })} */}
    </div>
  )
}

export default MainPage