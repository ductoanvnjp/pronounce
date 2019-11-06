import {DebounceInput} from 'react-debounce-input'
import ECELL from './ECELL.js'
import React, { Component } from 'react';
import {Table, Column, Cell} from 'fixed-data-table-2';
import 'fixed-data-table-2/dist/fixed-data-table.css';

const data = [
   /*  {unit:5,title:'Farm Poem',track:45,en:'Farm Poem',vn:'Bài Thơ Trang Trại'},
    {unit:5,title:'Farm Poem',track:45,en:'Hello to the farmer',vn:'Xin chào một người nông dân'},
    {unit:5,title:'Farm Poem',track:45,en:'Hello to the tractor',vn:'Xin chào một chiếc máy kéo'},
    {unit:5,title:'Farm Poem',track:45,en:'Hello to the cows in their stall ',vn:'Xin chào những con bò đang ở trong chuồng của chúng'},
    {unit:5,title:'Farm Poem',track:45,en:'Hello to the fields',vn:'Xin chào những cánh đồng'},
    {unit:5,title:'Farm Poem',track:45,en:'Hello to the chicks',vn:'Xin chào những con gà con'},
    {unit:5,title:'Farm Poem',track:45,en:'Hello to you all!',vn:'Xin chào tất cả các bạn!'},

    {unit:5,title:'Farm Poem',track:47,en:'feeding. f,e,e,d,i,n,g',vn:'đang cho ăn'},
    {unit:5,title:'Farm Poem',track:47,en:'The boys are feeding the cows',vn:'Các cậu bé đang cho bò ăn'},

    {unit:5,title:'Farm Poem',track:47,en:'planting. p,l,a,n,t,i,n,g',vn:'đang trồng cây'},
    {unit:5,title:'Farm Poem',track:47,en:'The two girls are planting rice',vn:'Hai cô gái đang trồng lúa'},

    {unit:5,title:'Farm Poem',track:47,en:'picking. p,i,c,k,i,n,g',vn:'đang hái'},
    {unit:5,title:'Farm Poem',track:47,en:'The little boy is picking strawberries',vn:'Cậu bé đang hái những quả dâu'},

    {unit:5,title:'Farm Poem',track:47,en:'driving. d,r,i,v,i,n,g',vn:'đang lái xe'},
    {unit:5,title:'Farm Poem',track:47,en:'The man is driving a tractor',vn:'Người đàn ông đang lái máy kéo'},

    {unit:5,title:'Farm Poem',track:47,en:'carrying. c,a,r,r,y,i,n,g',vn:'đang mang'},

    {unit:5,title:'Farm Poem',track:47,en:'Are you planting rice?',vn:'Bạn đang trồng lúa à?'},
    {unit:5,title:'Farm Poem',track:47,en:'Yes, I am.',vn:'Vâng, đúng rồi.'},
    {unit:5,title:'Farm Poem',track:47,en:'No, I\'m not.',vn:'Không, không phải.'},

    {unit:5,title:'The life cycle of a hen',track:48,en:'The life cycle of a hen',vn:'Vòng đời của một con gà mái'},
    {unit:5,title:'The life cycle of a hen',track:48,en:'A tiny chick grows inside an egg',vn:'Một con gà nhỏ phát triển bên trong một quả trứng'},
    {unit:5,title:'The life cycle of a hen',track:48,en:'The chick comes out of the egg',vn:'Một con gà con nở ra khỏi quả trứng'},
    {unit:5,title:'The life cycle of a hen',track:48,en:'The yellow chick eats and grows',vn:'Một con gà  màu vàng ăn và lớn lên'},
    {unit:5,title:'The life cycle of a hen',track:48,en:'The chick becomes a hen.The hen lays an egg',vn:'Một con gà con trở thành một con gà. Một con gà mái đẻ một quả trứng'},

    {unit:5,title:'The life cycle of a bean',track:49,en:'The life cycle of a bean',vn:'Vòng đời của một hạt đỗ',},
    {unit:5,title:'The life cycle of a bean',track:49,en:'A seed is planted in the ground',vn:'Một hạt giống được trồng trong lòng đất'},
    {unit:5,title:'The life cycle of a bean',track:49,en:'The seed starts to grow',vn:'Hạt giống bắt đầu lớn lên'},
    {unit:5,title:'The life cycle of a bean',track:49,en:'The seed becomes a big plant',vn:'Hạt giống trở thành một cây to',},
    {unit:5,title:'The life cycle of a bean',track:49,en:'A bean grows on the plant',vn:'Một quả đỗ mọc trên cây'},
    {unit:5,title:'The life cycle of a bean',track:49,en:'There are seeds inside the bean',vn:'Có các hạt giống ở trong quả đỗ'},

    {unit:5,title:'Tongue twisters',track:50,en:'big',vn:'to'},
    {unit:5,title:'Tongue twisters',track:50,en:'pick',vn:'hái'},
    {unit:5,title:'Tongue twisters',track:50,en:'chick',vn:'gà con'},
    {unit:5,title:'Tongue twisters',track:50,en:'Six sisters sing to six sick sheep',vn:'Sáu chị em hát cho sáu con cừu ốm'},
    {unit:5,title:'Tongue twisters',track:50,en:'How many sticks can a big chick kick?',vn:'Một con gà con to có thể đá được bao nhiêu chiếc gậy'},
    {unit:5,title:'Tongue twisters',track:50,en:'Pick a big fig',vn:'Chọn một quả sung to'},
    //w3,14-18,Jan
    {unit:5,title:'Fix-it Fish',track:51,en:'Fix-it Fish',vn:'Cá sửa chữa'},
    {unit:5,title:'Fix-it Fish',track:51,en:'This fish can fix things',vn:'Con cá này có thể sửa đồ'},
    {unit:5,title:'Fix-it Fish',track:51,en:'He is fixing a ship',vn:'Anh ấy đang sửa một con tàu'},
    {unit:5,title:'Fix-it Fish',track:51,en:'I can fix this ship',vn:'Tôi có thể sửa con tàu này'},
    {unit:5,title:'Fix-it Fish',track:51,en:'He is fixing a swing',vn:'Anh ấy đang sửa một cái xích đu'},
    {unit:5,title:'Fix-it Fish',track:51,en:'Can you fix it?',vn:'Bạn có thể sửa nó không?'},
    {unit:5,title:'Fix-it Fish',track:51,en:'Yes, I can.',vn:'Có, tôi có thể.'},
    {unit:5,title:'Fix-it Fish',track:51,en:'He can fix tails, fins and wings',vn:'Anh ấy có thể sửa đuôi, vây và cánh '},
    {unit:5,title:'Fix-it Fish',track:51,en:'Can you fix my wing, please?',vn:'Bạn có thể sửa vây của tôi được không? '},
    {unit:5,title:'Fix-it Fish',track:51,en:'Yes, I can. Just a minute',vn:'Vâng, tôi có thể. Đợi một chút.'},
    {unit:5,title:'Fix-it Fish',track:51,en:'Thank you, Fix-it Fish!',vn:'Cám ơn bạn. Cá sửa chữa!'},
    {unit:5,title:'Fix-it Fish',track:51,en:'You are welcome',vn:'Không có gì'},

    {unit:5,title:'Growing vegetables',track:0,en:'Above the ground: tomatoes, peppers, beans',vn:'Trên mặt đất: quả cà chua, quả ớt, quả đỗ'},
    {unit:5,title:'Growing vegetables',track:0,en:'Under the ground: carrots, onions, potatoes',vn:'Dưới lòng đất: củ cà rốt, củ hành, củ khoai tây'},
    {unit:5,title:'Growing vegetables',track:0,en:'Are the carrots growing under the ground?',vn:'Cà rốt mọc dưới mặt đất phải không?'},
    {unit:5,title:'Growing vegetables',track:0,en:'Yes, they are',vn:'Vâng, đúng rồi.'},
    {unit:5,title:'Growing vegetables',track:0,en:'Is the girl picking a pepper?',vn:'Có phải cô gái đang hái một quả ớt?'},
    {unit:5,title:'Growing vegetables',track:0,en:'No, she isn\'t',vn:'Không, không phải'},

    {unit:5,title:'Little Red Hen',track:53,en:'I am making bread today',vn:'Hôm nay tôi sẽ làm bánh'},
    {unit:5,title:'Little Red Hen',track:53,en:'Hello, Duck. Hello, Chick. Can you please help me pick the wheat?',vn:'Xin chào vịt. Xin chào gà con. Các bạn có thể giúp tôi hái lúa mì được không?'},
    {unit:5,title:'Little Red Hen',track:53,en:'Sorry, I am busy',vn:'Xin lỗi, Tôi đang bận.'},
    {unit:5,title:'Little Red Hen',track:53,en:'Me too',vn:'Tôi cũng vậy'},
    {unit:5,title:'Little Red Hen',track:53,en:'I am picking the wheat myself',vn:'Tôi sẽ tự hái lúa mì'},
    {unit:5,title:'Little Red Hen',track:53,en:'Hello, Duck. Hello Chick. Can you please help me grind the wheat?',vn:'Xin chào vịt. Xin chào gà con. Các bạn có thể vui lòng giúp tôi xay lúa mì được không?'},
    {unit:5,title:'Little Red Hen',track:53,en:'Sorry, I am busy',vn:'Xin lỗi, Tôi đang bận.'},
    {unit:5,title:'Little Red Hen',track:53,en:'Me too',vn:'Tôi cũng vậy'},
    {unit:5,title:'Little Red Hen',track:53,en:'I am grinding the wheat myself',vn:'Tôi sẽ tự xay lúa mì'},
    {unit:5,title:'Little Red Hen',track:53,en:'Hello, Duck. Hello, Chick. Can you please help me make the bread?',vn:'Xin chào Vịt. Xin chào gà con. Các bạn có thể vui lòng giúp tôi làm bánh mì được không?'},
    {unit:5,title:'Little Red Hen',track:53,en:'Sorry. I am busy',vn:'Xin lỗi, tôi đang bận.'},
    {unit:5,title:'Little Red Hen',track:53,en:'Me too',vn:'Tôi cũng vậy.'},
    {unit:5,title:'Little Red Hen',track:53,en:'I am making the bread myself',vn:'Tôi sẽ tự làm bánh mì'},
    {unit:5,title:'Little Red Hen',track:53,en:'Can we please eat your bread?',vn:'Chúng tôi có thể ăn bánh mì của bạn được không?'},
    {unit:5,title:'Little Red Hen',track:53,en:'Will you wash the dishes?',vn:'Bạn sẽ rửa đĩa chứ?'},
    {unit:5,title:'Little Red Hen',track:53,en:'Will you sweep the floor?',vn:'Bạn sẽ quét sàn nhà chứ?'},
    {unit:5,title:'Little Red Hen',track:53,en:'Yes, I will',vn:'Vâng, tôi sẽ làm.'},
    {unit:5,title:'Little Red Hen',track:53,en:'We are all eating the bread',vn:'Tất cả chúng ta đang ăn bánh mì'},
    {unit:5,title:'Little Red Hen',track:53,en:'It is delicious!',vn:'Nó thật là ngon!'},
    {unit:5,title:'Little Red Hen',track:53,en:'Thank you, Chick. Thank you, Duck. You are very helpful',vn:'Cám ơn gà con. Cám ơn vịt. Các bạn đã giúp tôi rất nhiều.'},

    {unit:0,title:'Play Ball',track:0,en:'Play Ball',vn:'Chơi Bóng'},
    {unit:0,title:'Play Ball',track:0,en:'A beach ball',vn:'Một quả bóng bãi biển'},
    {unit:0,title:'Play Ball',track:0,en:'A baseball',vn:'Một quả bóng chày'},
    {unit:0,title:'Play Ball',track:0,en:'A basketball',vn:'Một quả bóng rổ'},
    {unit:0,title:'Play Ball',track:0,en:'A football',vn:'Một quả bóng bầu dục'},
    {unit:0,title:'Play Ball',track:0,en:'A tennis ball',vn:'Một qủa bóng tennis'},
    {unit:0,title:'Play Ball',track:0,en:'A golf ball',vn:'Một quả bóng gôn'},
    {unit:0,title:'Play Ball',track:0,en:'A soccer ball',vn:'Một quả bóng đá'},
    {unit:0,title:'Play Ball',track:0,en:'A volleyball',vn:'Một quả bóng chuyền'},
    */
    {unit:1,title:'Five friends',track:0,en:'A man arrives with an elephant.',vn:'Một người đàn ông đến với một con voi'},
    {unit:1,title:'Five friends',track:0,en:'It\'s the first elephant to visit this land!',vn:'Nó là con voi đầu tiên đến thăm vùng đất này!'},
    {unit:1,title:'Five friends',track:0,en:'Five blind friends want to meet it.',vn:'Năm người bạn mù muốn gặp nó'},
    {unit:1,title:'Five friends',track:0,en:'The can\'t see, but they can use their other senses to learn about the world.',vn:'Họ không thể nhìn thấy, nhưng họ có thể sử dụng các giác quan khác để học về thế giới'},

    {unit:0,title:'Five friends',track:0,en:'The five friends go to meet the elephant.',vn:'Năm người bạn đi tới gặp con voi'},
    {unit:0,title:'Five friends',track:0,en:'Can wee meet your elephant, please?',vn:'Chúng tôi có thể gặp con voi của bạn không?'},
    {unit:0,title:'Five friends',track:0,en:'Of course. My elephant is tame and gentle.',vn:'Tất nhiên. Con voi của tôi thì thuần hoá và hiền lành'},
    {unit:0,title:'Five friends',track:0,en:'The first friend feels the elephant\'s long, thin tail',vn:'Người bạn đầu tiên cảm thấy cái đuôi dài và mỏng của con voi'},
    {unit:0,title:'Five friends',track:0,en:'The elephant feels like a rope',vn:'Con voi này cảm giác giống như một sợi dây'},
    {unit:0,title:'Five friends',track:0,en:'The second friend feels the elephant\'s side',vn:'Người bạn thứ hai cảm thấy sườn của con voi'},
    {unit:0,title:'Five friends',track:0,en:'This elephant feels like a wall',vn:'Con voi này cảm giác giống như một bức tường'},
    {unit:0,title:'Five friends',track:0,en:'The third friend feels the elephant\'s leg',vn:'Người bạn thứ ba cảm thấy cái chân của con voi'},
    {unit:0,title:'Five friends',track:0,en:'This elephant feels like a big strong tree!',vn:'Con voi này cảm giác giống như một cây to khoẻ'},
    {unit:0,title:'Five friends',track:0,en:'The fourth friend feels the elephant\'s ear',vn:'Người bạn thứ tư cảm thấy cái tai của con voi'},
    {unit:0,title:'Five friends',track:0,en:'This elephant feels like a giant fan!',vn:'Con voi này cảm giác giống như một cái quạt khổng lồ'},
    {unit:0,title:'Five friends',track:0,en:'The fifth friend feels the elephant\'s trunk',vn:'Người bạn thứ năm cảm thấy cái vòi của con voi'},
    {unit:0,title:'Five friends',track:0,en:'This elephant feels like a long wiggly snake!',vn:'Con voi này cảm giác giống như một con rắn dài ngọ nguậy'},
    {unit:0,title:'Five friends',track:0,en:'All of you are right, my friends',vn:'Tất cả các bạn đều đúng, các bạn của tôi'},
    {unit:0,title:'Five friends',track:0,en:'My elephant has many different parts and each part feels different',vn:'Con voi của tôi có nhiều phần khác nhau và mỗi phần cảm thấy khác nhau'},
    {unit:0,title:'Five friends',track:0,en:'Why don\'t you help me take care of my elephant? ',vn:'Tại sao các bạn không giúp tôi chăm sóc con voi của tôi'},
    {unit:0,title:'Five friends',track:0,en:'You can get to know the whole elephant better',vn:'Các bạn có thể hiểu rõ hơn về toàn bộ con voi'},

    {unit:0,title:'Five friends',track:0,en:'So the five friends help the man take care of the elephant',vn:'Vì vậy năm người bạn giúp người đàn ông chăm sóc con voi'},
    {unit:0,title:'Five friends',track:0,en:'They learn many interesting things',vn:'Họ học được nhiều điều thú vị'},

    {unit:0,title:'Five friends',track:0,en:'The elephant smells like a horse',vn:'Con voi có mùi như con ngựa'},
    {unit:0,title:'Five friends',track:0,en:'The elephant has a loud voice',vn:'Con voi có tiếng kêu lớn'},
    {unit:0,title:'Five friends',track:0,en:'The elephant likes the taste of apples',vn:'Con voi thích hương vị của táo'},
    {unit:0,title:'Five friends',track:0,en:'We like this elephant!',vn:'Chúng tôi thích con voi này'},
];

function removeAccents(str) {
    return str.normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .replace(/đ/g, 'd').replace(/Đ/g, 'D');
}

export default class DataTable extends Component {
    constructor(props){
        super(props)
        this.state={
            filteredData:data
        }
        this.handleUnitFilterChange=this.handleUnitFilterChange.bind(this)
        this.handleTrackFilterChange=this.handleTrackFilterChange.bind(this)
        this.handleEnglishFilterChange=this.handleEnglishFilterChange.bind(this)
        this.handleVietnameseFilterChange=this.handleVietnameseFilterChange.bind(this)
        this.handleTitleFilterChange=this.handleTitleFilterChange.bind(this)
    }

    handleUnitFilterChange(event) {
        if (event.keyCode === 13) {
            if (!event.target.value) {
                this.setState({
                    filteredData: data
                })
            } else {
                var filterBy = event.target.value
                var filteredData = [];
                var size = this.state.filteredData.length
                for (var index = 0; index < size; index++) {
                    var row = this.state.filteredData[index].unit
                    if (row == filterBy) {
                        filteredData.push(this.state.filteredData[index])
                    }
                }
                this.setState({filteredData: filteredData})
            }
        }
    }

    handleTrackFilterChange(event) {
        if (event.keyCode === 13) {
            if (!event.target.value) {
                this.setState({
                    filteredData: data
                })
            } else {
                var filterBy = event.target.value
                var filteredData = [];
                var size = this.state.filteredData.length
                for (var index = 0; index < size; index++) {
                    var row = this.state.filteredData[index].track
                    if (row == filterBy) {
                        filteredData.push(this.state.filteredData[index])
                    }
                }
                this.setState({filteredData: filteredData})
            }
        }
    }

    handleEnglishFilterChange(event){
        if (!event.target.value) {
            this.setState({
                filteredData: data
            })
        } else {
            var filterBy = event.target.value.toLowerCase()
            var filteredData = [];
            var size = this.state.filteredData.length
            for (var index = 0; index < size; index++) {
                var row = this.state.filteredData[index].en.toLowerCase()
                if (row.includes(filterBy)) {
                    filteredData.push(this.state.filteredData[index])
                }
            }
            this.setState({filteredData: filteredData})
        }
    }

    handleTitleFilterChange(event){
        if (!event.target.value) {
            this.setState({
                filteredData: data
            })
        } else {
            var filterBy = event.target.value.toLowerCase()
            var filteredData = [];
            var size = this.state.filteredData.length
            for (var index = 0; index < size; index++) {
                var row = this.state.filteredData[index].title.toLowerCase()
                if (row.includes(filterBy)) {
                    filteredData.push(this.state.filteredData[index])
                }
            }
            this.setState({filteredData: filteredData})
        }
    }

    handleVietnameseFilterChange(event){
        if (!event.target.value) {
            this.setState({
                filteredData: data
            })
        } else {
            var filterBy = removeAccents(event.target.value.toLowerCase())
            var filteredData = [];
            var size = this.state.filteredData.length
            for (var index = 0; index < size; index++) {
                var row = removeAccents(this.state.filteredData[index].vn.toLowerCase())
                if (row.includes(filterBy)) {
                    filteredData.push(this.state.filteredData[index])
                }
            }
            this.setState({filteredData: filteredData})
        }
    }

    render() {
        return (
            <div style={{fontSize:'large'}}>
                <Table
                rowHeight={85}
                headerHeight={90}
                rowsCount={this.state.filteredData.length}
                //rowsCount={5}
                width={1135}
                height={8000}
                {...this.props}
                >
                <Column
                    columnKey='unit'
                    header={<Cell>
                        <p style={{float:'center',fontSize:'medium'}}>UNIT</p>
                        <input style={{float:'center'}} type="number" min="0" max="99" value={null} onKeyUp={this.handleUnitFilterChange} />
                    </Cell>}
                    cell={({rowIndex, columnKey, ...props}) => (
                        <Cell {...props}>
                            <p style={{textAlign:'center'}}>{this.state.filteredData[rowIndex][columnKey]}</p>
                        </Cell>
                    )}
                    width={65}
                />
                <Column
                    columnKey='track'
                    header={<Cell>
                        <p style={{float:'center',fontSize:'medium'}}>TRACK</p>
                        <input style={{float:'center'}} type="number" min="0" max="999" value={null} onKeyUp={this.handleTrackFilterChange} />
                    </Cell>}
                    cell={({rowIndex, columnKey, ...props}) => (
                        <Cell {...props}>
                            <p style={{textAlign:'center'}}> {this.state.filteredData[rowIndex][columnKey]} </p>
                        </Cell>
                    )}
                    width={70}
                />
                    <Column
                        columnKey='title'
                        header={<Cell>
                            <p style={{fontSize:'medium'}}>TITLE</p>
                            <DebounceInput
                                debounceTimeout={500}
                                name='title'
                                onChange={this.handleTitleFilterChange}
                            />
                        </Cell>}
                        cell={({rowIndex, columnKey, ...props}) => (
                            <Cell {...props}>
                                {this.state.filteredData[rowIndex][columnKey]}
                            </Cell>
                        )}
                        width={200}
                    />
                    <Column
                    columnKey='en'
                    header={<Cell>
                        <p style={{fontSize:'medium'}}>ENGLISH</p>
                        <DebounceInput
                            debounceTimeout={500}
                            name='en'
                            onChange={this.handleEnglishFilterChange}
                        />
                    </Cell>}

                    cell={({rowIndex, columnKey, ...props}) => (
                        <ECELL CellData={this.state.filteredData[rowIndex][columnKey]}/>
                    )}
                    width={400}
                />

                <Column
                    columnKey='vn'
                    header={<Cell>
                        <p style={{fontSize:'medium'}}>TIẾNG VIỆT</p>
                        <DebounceInput
                            debounceTimeout={500}
                            name='en'
                            onChange={this.handleVietnameseFilterChange}
                        />
                    </Cell>}
                    cell={({rowIndex, columnKey, ...props}) => (
                        <Cell {...props}>
                            {this.state.filteredData[rowIndex][columnKey]}
                        </Cell>
                    )}
                    width={400}
                />
            </Table>
            </div>
        )
    }
}
