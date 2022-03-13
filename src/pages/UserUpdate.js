import react,{useState, useEffect} from 'react';
import styled from 'styled-components'
import { mobile } from '../Responsive';
import Header from '../components/Header';
import { NFTStorage, Blob } from "nft.storage";
import { userRequest } from '../RequestMethods';
import { useSelector } from "react-redux";

const API_TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweDlkNzRjN2VkODdhMTdmQTgyMjVERkEzOTE0YmMxZjI2MzJDMDdBMDciLCJpc3MiOiJuZnQtc3RvcmFnZSIsImlhdCI6MTY0MTY1MDY4NjY5NywibmFtZSI6Ik5GVG1hcmtldHBsYWNlLVBvbHlnb24tcHJvamVjdCJ9.jUqwU9d0esz_wnOiTmCaXmv3tvP1F5BW-B98bNYPcKk"
const client = new NFTStorage({token: API_TOKEN})
//GIS location leftover

const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background:  linear-gradient(rgba(255, 255, 255,0.5),
    rgba(255, 255, 255,0.5)),
     url('https://bafybeiekcjbezl6bnxbg2krm623oqtfxnb7crpe7zpbyxijm5mmpsij35u.ipfs.infura-ipfs.io/')
     center;
    background-color: black;
`;

const Wrapper = styled.div`
    margin: 5rem 5rem 0rem 0rem;
    width: 40%;
    padding: 3rem;
    background: linear-gradient(rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.2));
    ${mobile({ width: '65%'})};
`;


const Title = styled.h1`
    font-size: 24px;
    font-weight: 300;
`;

const Form = styled.form`
    display: flex;
    flex-wrap: wrap;
`;

const Input = styled.input`
flex: 1;
min-width: 40%;
margin: 20px 10px 0px 0px;
padding: 10px;
z-index: 10;
`;

const Agreement = styled.span`
    font-size: 12px;
    margin: 20px 10px;
`;

const Button = styled.button`
    width: 40%;
    border: none;
    padding: 15px 20px;
    background-color: teal;
    color: white;

    &:hover {
        cursor: pointer;
        background-color: white;
        color: black;
    }
`;

const LogoPos = styled.div`
display: flex;
justify-content: center;
align-items: center;

`;

const LogoContainer = styled.div`
margin-top: -1rem;
width: 15vw;
height: 30vh;
${mobile({width: '40vw', height: '30vh'})}
`;

const Logo = styled.img`
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
    z-index: 5;
`;

const LogoText = styled.p`
    margin-top: -0.5rem;
    justify-content: center;
    text-align: center;
    font-size: 10px;
`;

const Inputtext = styled.textarea`
flex: 1;
min-width: 40%;
margin: 20px 10px 0px 0px;
padding: 10px;
z-index: 10;
`;


const G = styled.div``;
const T = styled.p`
    margin-bottom: -1.5rem;
    margin-left: 0.5rem;
    margin-top: 0.5rem;
    flex: 1;
`;

const Y = styled.div`
    display: flex;
    margin-bottom: 1.5rem;
    justify-content: space-around;
`;


const UserUpdate = () => {
    const [address, setAddress] = useState('');
    const [headmaster, setHeadmaster] = useState('');
    const [teachers, setTeachers] = useState('');
    const[student, setStudent] = useState('');
    const [pincode, setPincode] = useState('');
    const [buildingSize, setBuildingSize] = useState('');
    const [buildingArea, setBuildingArea] = useState('');
    const [premisesArea, setPremisesArea] = useState('');
    const [year, setYear] = useState(null);
    const [labs, setLabs] = useState(null);
    const [rooms, setRooms] = useState(null);
    const [maintenance, setMaintenance] = useState('');
    const [state, setState]= useState("");
    const [district, setDistrict] = useState('');
    const [block, setBlock] = useState('');
    const [cluster, setCluster] = useState('');
    const [schoolphoto, setSchoolphoto] = useState(null);
    const [headmasterphoto, setHeadmasterphoto] = useState(null);
    const [labsvideo, setLabsvideo] = useState(null);
    const [maintenancephoto, setMaintenancephoto] = useState(null);
    const [maintenancevideo, setMaintenancevideo] = useState(null);

    //const currentUser = true;
    const currentUser = useSelector((state) => state.currentUser);
    console.log(currentUser);



       async function onChange_schoolphoto(e) {
        const files = e.target.files[0];
        try{
            const cid = await client.storeBlob(new Blob([files]));
            const url = `https://${cid}.ipfs.dweb.link`
            console.log(url);
            console.log(cid);
            console.log(files);
            setSchoolphoto(url);
        } catch(e){
          console.log(e.message);
        }
      }

      async function onChange_headmasterphoto(e) {
        const files = e.target.files[0];
        try{
            const cid = await client.storeBlob(new Blob([files]));
            const url = `https://${cid}.ipfs.dweb.link`
            console.log(url);
            console.log(cid);
            console.log(files);
            setHeadmasterphoto(url);
        } catch(e){
          console.log(e.message);
        }
      }

      async function onChange_labs(e) {
        const files = e.target.files[0];
        try{
            const cid = await client.storeBlob(new Blob([files]));
            const url = `https://${cid}.ipfs.dweb.link`
            console.log(url);
            console.log(cid);
            console.log(files);
            setLabsvideo(url);
        } catch(e){
          console.log(e.message);
        }
      }

      async function onChange_maintenancevideo(e) {
        const files = e.target.files[0];
        try{
            const cid = await client.storeBlob(new Blob([files]));
            const url = `https://${cid}.ipfs.dweb.link`
            console.log(url);
            console.log(cid);
            console.log(files);
            setMaintenancevideo(url);
        } catch(e){
          console.log(e.message);
        }
      }

      async function onChange_maintenancephoto(e) {
        const files = e.target.files[0];
        try{
            const cid = await client.storeBlob(new Blob([files]));
            const url = `https://${cid}.ipfs.dweb.link`
            console.log(url);
            console.log(cid);
            console.log(files);
            setMaintenancephoto(url);
        } catch(e){
          console.log(e.message);
        }
      }
    
      const handleClick = async() => {
        try {

            const res = await userRequest.post("/school/add/", {
              userId: currentUser._id,
              name: currentUser.organization,
              email: currentUser.email,
              address: address,
              pincode: pincode,
              state: state,
              district: district,
              block: block,
              cluster: cluster,
              phonenumber: currentUser.phonenumber,
              headmastername: headmaster,
              numberofstudents: student,
              numberofteachers: teachers,
              premises: premisesArea,
              buildingsize: buildingSize,
              buildingarea: buildingArea,
              yearofconstruction: year,
              schoolphoto: schoolphoto,
              headmasterphoto: headmasterphoto,
              numberoflabs: labs,
              labvideo: labsvideo,
              numberofrooms: rooms,
              isMaintenanceRequired: maintenance,
              maintenancevideo: maintenancevideo,
              maintenanceimage: maintenancephoto,
            });
            console.log(res);
            //setOrder(res);
    
        }  catch(err) {console.log(err);}
    }
        

  return (
    <Container>
        <Header/>
        <Wrapper>
            <LogoPos>
                <LogoContainer>
                    <Logo src='https://mail.google.com/mail/u/0?ui=2&ik=2512c29570&attid=0.1&permmsgid=msg-f:1726989567767602312&th=17f77fdca597e488&view=fimg&realattid=17f77fd2217930b5ea11&disp=thd&attbid=ANGjdJ8vI2eK5Ucf6ZBtpkDkiIqJza1qxbcpq5GO8UztsSgCVbLoGpSa3jjXmGD2-h3BI04vLlASiO2nM29hqTVj6BHubJfQG9rgQDoXQxyKzJYHNCwiCMtwpZT3lGo&ats=2524608000000&sz=w1920-h902'/>
                </LogoContainer>
            </LogoPos>
            <Y>
            <T><strong>Your Organization Name :- </strong>{currentUser.organization}</T>
            <T> <strong>Your Organization Email :- </strong>{currentUser.email}</T>
            </Y>

        <Title>UPDATE YOUR SCHOOL DATA</Title>
                        
            <Form>
           
            
            <Inputtext placeholder="Address" onChange={(e) => setAddress(e.target.value)}/>
            <Input placeholder="Pincode" onChange={(e) => setPincode(e.target.value)}/>
            <Input placeholder="HeadMaster Name" onChange={(e) => setHeadmaster(e.target.value)}/>
            <Input type = 'number' placeholder="Number of Teachers" onChange={(e) => setTeachers(e.target.value)}/>
            <Input type = 'number' placeholder="Number of Students" onChange={(e) => setStudent(e.target.value)}/>
            <Input placeholder="Building Size" onChange={(e) => setBuildingSize(e.target.value)}/>
            <Input placeholder="Building Area" onChange={(e) => setBuildingArea(e.target.value)}/>
            <Input placeholder="Premises Area" onChange={(e) => setPremisesArea(e.target.value)}/>
            <Input placeholder="Year of construction" onChange={(e) => setYear(e.target.value)}/>
            <Input type="number" placeholder="Number of Labs" onChange={(e) => setLabs(e.target.value)}/>
            <Input type="number" placeholder="Number of Rooms" onChange={(e) => setRooms(e.target.value)}/>
            <Input placeholder="Maintenance Required YES | NO" onChange={(e) => setMaintenance(e.target.value)}/>
            <Input placeholder="State" onChange={(e) => setState(e.target.value)}/>
            <Input placeholder="District" onChange={(e) => setDistrict(e.target.value)}/>
            <Input placeholder="Block" onChange={(e) => setBlock(e.target.value)}/>
            <Input placeholder="Cluster" onChange={(e) => setCluster(e.target.value)}/>

            <G>
            <T>School Photo</T>
            <Input
             type='file' onChange={onChange_schoolphoto}/>
              {
              schoolphoto && (
                <img className="rounded mt-4 mb-4" width="200" src={schoolphoto} />
              )
            }
            </G>
            <G>
            <T>HeadMaster Photo</T>
            <Input
             type='file' onChange={onChange_headmasterphoto}/>
              {
              headmasterphoto && (
                <img className="rounded mt-4 mb-4" width="200" src={headmasterphoto} />
              )
            }
            </G>
            <G>
            <T>Lab Video</T>
            <Input
             type='file' onChange={onChange_labs}/>
              {
              labsvideo && (
                <img className="rounded mt-4 mb-4" width="200" src={labsvideo} />
              )
            }
            </G>
            <G>
            <T>Maintenance Photo</T>
            <Input
             type='file' onChange={onChange_maintenancephoto}/> 
              {
              maintenancephoto && (
                <img className="rounded mt-4 mb-4" width="200" src={maintenancephoto} />
              )
            }
            </G>
            <G>
            <T>Maintenance Video</T>
            <Input
             type='file' onChange={onChange_maintenancevideo}/>
              {
              maintenancevideo && (
                <img className="rounded mt-4 mb-4" width="200" src={maintenancevideo} />
              )
            }
            </G>
        
            <Agreement>
                By Updating the School Data for Government Services
                data in accordance saved with <b>PRIVACY POLICY</b>
            </Agreement>
            <Button onClick={handleClick}>UPDATE</Button>
            </Form>
        </Wrapper>
    </Container>
  )
}

export default UserUpdate;