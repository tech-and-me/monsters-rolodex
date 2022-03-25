

const SearchBox = ({searchChange}) => {
  return (
    <div className='pa2'>
        <input type='search'
        placeholder='search robots'
        className = 'bg-washed-yellow pa3 ma5'
        onChange = {searchChange}
        />
    </div>
  )
}

export default SearchBox;