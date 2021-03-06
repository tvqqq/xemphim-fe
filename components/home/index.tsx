import ListMovies from './ListMovies'
import TopMovie from './TopMovie'

const HomeComponent = ({ data }: { data: any }) => {
  return (
    <div>
      <TopMovie data={data.first} />
      <ListMovies data={data.list} />
    </div>
  )
}

export default HomeComponent
