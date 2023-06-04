import React from 'react';
import { Link } from 'react-router-dom';
import SearchIcon from '@material-ui/icons/Search';
import DescriptionIcon from '@material-ui/icons/Description';
import ImageIcon from '@material-ui/icons/Image';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import RoomIcon from '@material-ui/icons/Room';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Search from './Search';
import './Searchpage.css';
import { useStateValue } from '../StateProvider';
import useGoogleSearch from '../useGoogleSearch';

const Searchpage = () => {
  const [{ term }] = useStateValue();
  const { data } = useGoogleSearch(term);

  console.log(data);

  return (
    <div className='searchpage'>
      <div className='searchpage__header'>
        <Link to='/'>
          <img
            src='https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png'
            alt='logo'
          />
        </Link>
        <div className='searchpage__headerBody'>
          <Search hidebuttons />
          <div className='searchpage__options'>
            <div className='searchpage__option'>
              <SearchIcon />
              <Link to='/all'>All</Link>
            </div>
            <div className='searchpage__option'>
              <DescriptionIcon />
              <Link to='/news'>News</Link>
            </div>
            <div className='searchpage__option'>
              <ImageIcon />
              <Link to='/images'>Images</Link>
            </div>
            <div className='searchpage__option'>
              <LocalOfferIcon />
              <Link to='/shop'>Shop</Link>
            </div>
            <div className='searchpage__option'>
              <RoomIcon />
              <Link to='/maps'>Maps</Link>
            </div>
            <div className='searchpage__option'>
              <MoreVertIcon />
              <Link to='/more'>More</Link>
            </div>
          </div>
        </div>
        <div className='searchpage__optionRight'>
          <div className='searchpage__option'>
            <Link to='/settings'>Settings</Link>
          </div>
          <div className='searchpage__option'>
            <Link to='/tools'>Tools</Link>
          </div>
        </div>
      </div>

      {term && data && data.items && (
        <div className='searchpage__results'>
          <p className='searchpage__resultCount'>
            Showing {data.searchInformation?.formattedTotalResults} results in{' '}
            {data.searchInformation?.formattedSearchTime} Seconds for {term}
          </p>
          {data.items.map((item) => (
            <div className='searchpage__result' key={item.cacheId}>
              <a href={item.link} className='searchpage__resultLink'>
                <img
                  src={item.pagemap?.cse_thumbnail?.[0]?.src}
                  alt='Result Thumbnail'
                  className='searchpage__resultimage'
                />
                {item.displayLink}
              </a>
              <a href={item.link} className='searchpage__resultTitle'>
                <h2>{item.title}</h2>
              </a>
              <p className='searchpage__resultdescription'>
                {item.snippet}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Searchpage;
