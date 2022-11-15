import Heart from './heart'
import Left from './left'
import Link from './link'
import Pause from './pause'
import Play from './play'
import Search from './search'
import ShareLeft from './share-left'
import ShareRigth from './share-rigth'
import Star from './star'
import User from './user'

function Index({name, ...props}) {
  switch (name){
    case 'heart': {
      return <Heart {...props} />
    }

    case 'left': {
      return <Left {...props} />
    }

    case 'link': {
      return <Link {...props} />
    }

    case 'pause': {
      return <Pause {...props} />
    }

    case 'play': {
      return <Play {...props} />
    }

    case 'search': {
      return <Search {...props} />
    }

    case 'share-left': {
      return <ShareLeft {...props} />
    }

    case 'share-rigth': {
      return <ShareRigth {...props} />
    }

    case 'star': {
      return <Star {...props} />
    }

    case 'user': {
      return <User {...props} />
    }

    default : null
  }
}

Index.defaultProps = {
  size: 24,
  color: 'var(--white-1)'

}

export default Index
