// Array that takes an icon src and text
import Home from '/Home.svg'
import Award from '/Award.svg'
import BtnPrev from '/BtnPrev.svg'
import BtnNext from '/BtnNext.svg'
import Celebrities from '/Celebrities.svg'
import Completed from '/Completed.svg'
import Discover from '/Discover.svg'
import Downloaded from '/Downloaded.svg'
import Playlists from '/Playlists.svg'
import Recent from '/Recent.svg'
import Watchlist from '/Watchlist.svg'
import Settings from '/Settings.svg'
import Star from '/Star.svg'
import Logout from '/LogOut.svg'


const Menu = [
    {icon:Home,name:'Home'},
    {icon:Discover,name:'Discover'},
    {icon:Award,name:'Awards'},
    {icon:Celebrities,name:'Celebrities'}
]

const Library=[
    {icon:Recent,name:'Recent'},
    {icon:Star,name:'Top Rated'},
    {icon:Downloaded,name:'Downloaded'},
    {icon:Playlists,name:'Playlists'},
    {icon:Watchlist,name:'Watchlist'},
    {icon:Completed,name:'Completed'}
]

const General = [
    {icon: Settings, name:'Settings'}, 
    {icon: Logout, name:'Logout/in'}
]

export { Menu, Library, General };