

  switch(filterkey) {
    case 'date':
      const sortedDate = filterData.sort()
      this.setState({
        [filterKey]: sortedDate,
      })
      break
    case 'rating':
      filterData.sort((a, b) => a - b);
      this.setState({
        [filterKey]: filterData,
      })
      break
    case 'genres':
      filterData.map((o) => {
        for(let i = 0; i < genres.length; i++) {
          if (o === genres[i].genre) {
              genres[i].isAdded = !genres[i].isAdded;
          }
        }

        genres.map((item) => {
          if (item.isAdded === true) {
            genresIDString += `${item.ID},`
          }
          this.setState({
            [filterKey]: genresIDString,
          })
          return true
        })
        return true
      })
      break
    default:
    this.setState({
      [filterKey]: filterData,
    })
  }
