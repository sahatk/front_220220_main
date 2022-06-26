// StudyType.js
import './StudyType.css';
import StudyItem from './Studyitem';


function StudyType(props){
    const cardArr = [
        {   id:1, link:'',
            skillTip:{icon:'', label:'', price:'', minPrice:'', bg:'', url:''},
            content:{cardTitle:'[경영] title1', option:'디자인', company:''}
        },
        {   id:2, link:'',
            skillTip:{icon:'', label:'', price:'', minPrice:'', bg:'', url:''},
            content:{cardTitle:'[디자인] title2', option:'웹', company:''}
        },
        {   id:3, link:'',
            skillTip:{icon:'', label:'', price:'', minPrice:'', bg:'', url:''},
            content:{cardTitle:'[디자인] title3', option:'디자인', company:''}
        },
        {   id:4, link:'',
            skillTip:{icon:'', label:'', price:'', minPrice:'', bg:'', url:''},
            content:{cardTitle:'[global] title4', option:'포토', company:''}
        },
    ];

    let items = [];
    items = cardArr.map(data=>{
        return <StudyItem 
        key={data.id} 
        cardTitle={data.content.cardTitle}
        option={data.content.option} />
    });

    return (
        <div className="StudyType">
            <h3>{props.title}</h3>
            <ul>
               {items}
            </ul>
        </div>
    )
}

export default StudyType;