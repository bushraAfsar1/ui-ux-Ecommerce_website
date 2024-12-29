'use client'
import { useState } from 'react';
let blogs =[
    {
          id: '1',
          image: 'https://s3-alpha-sig.figma.com/img/56f7/6fe2/41417cd682c30a19eecaf20a549cee89?Expires=1736121600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=IvtZAsNt~uNIAomZ-D7tVkm~edwo5G3jOVm6q6MLPaF0b4ZpqqybWKkDScRgYMiKeopIO5aSzHT0W5JXttvMXf2~XDNYUd57oLfT-OH6JtammaM-KhKbdzKYBHyhg4Yr3rG2xT5k2k3nnxsvZ4sW1XsXTSt0oTolt8xQpwT8jK4oCh8bmpy5b5EY3Wu9KxnC0AB2MZ2CPM3JnbXTRYKBF4DQYB09YpoYnNqJ9yRiLuAAAazXYUOZiCtGSaOfzqUO6k1SrpxpNwxxdOXLhoZ226ZqfK9ylHBDuvswCas5KqCkDo6cgGQt6h1V0XbfcCdnw8F4U8kHCHDroVbRFW2n5g__',
          title: ' Going all-in with millennial design',
          description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos vero dolores sunt quam id. Quibusdam corporis qui quos nihil velit.',
          detail: ' Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores voluptatibus ipsa reprehenderit sed, nisi magnam quis aperiam illum magni omnis eligendi! Assumenda repellendus, saepe nesciunt maiores blanditiis neque distinctio sapiente pariatur minima, voluptates expedita quis fugit soluta laborum, officiis explicabo ad quasi. Fuga ullam placeat sapiente quae ratione laborum nam.',
    },
    {
          id: '2',
          image: 'https://s3-alpha-sig.figma.com/img/d248/0301/96ed5dc3b3d01cf6cd369ef7aff2f296?Expires=1736121600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=GBQo65nk92uxo2IyIGaGNb1ETzmZA2ro~QZZ57uQ~aluy8AWpict2cevIQz~JRgdk0ucyD7g-IPCEI2fB1PilcbYaFadyXJtRDHupTnfpqhd9P1BN-DICOrrQISoH5AngaXTOYcW6pHsSvOwkn377fUYODKrHcJpSU7OfV-~uwdBDBAxAT9ZV9AJjRrXrgHHUYwLDC5TOac0g0Jbzyu6SQx5E-Zzv0reh8seBtPQ0G5qAh8NYzHO1jYOlTLVPKX8tBkcr5HyMMNs8quDGqaACVzf2Oh1C59QlXEG9y~DXeNHpT6O3Unk08znL3VLbeUiBCG0Djnd6s8D2gvV72zHzg__',
          title: ' Exploring new ways of decorating',
          description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos vero dolores sunt quam id. Quibusdam corporis qui quos nihil velit.',
          detail: ' Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores voluptatibus ipsa reprehenderit sed, nisi magnam quis aperiam illum magni omnis eligendi! Assumenda repellendus, saepe nesciunt maiores blanditiis neque distinctio sapiente pariatur minima, voluptates expedita quis fugit soluta laborum, officiis explicabo ad quasi. Fuga ullam placeat sapiente quae ratione laborum nam.',
    } ,
    {
          id: '3',
          image: 'https://s3-alpha-sig.figma.com/img/8dee/6dec/4190307dc6c7273c0bbf5086605997e4?Expires=1736121600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=S2vlnr8-7KPM7mXCFbQZnvZvnNcPrECLcTS~jhZNnD~ob8a0jXzErojlGXRYcY-7PPsvDLuTiO4oglZN2zy2XWALfYMSL6YnPejYb2Udl8ucwxRfUMMEvffq8E9W6aJud2~D~uqF-WsartEaDAUfwGYhCWhpFIXTS67RGR5oox6ET-mPlsKrzYljcPp5ngRnVlCkVj9SUgyn~X9EQXrtOMIyjpyJ7t5p4WmlU0Hq6gxu9eZt01E7hhwgiMihKj~cLNasyRi4iOXjzlnQD3hi-CUpFeF8dLpFH9feIT8Q8GXvdm8FXqiluuQoObo7lYWP2y9otiRk6FYlHn1lbYGLoA__',
          title: ' Handmade pieces that took time to make',
          description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos vero dolores sunt quam id. Quibusdam corporis qui quos nihil velit.',
          detail: ' Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores voluptatibus ipsa reprehenderit sed, nisi magnam quis aperiam illum magni omnis eligendi! Assumenda repellendus, saepe nesciunt maiores blanditiis neque distinctio sapiente pariatur minima, voluptates expedita quis fugit soluta laborum, officiis explicabo ad quasi. Fuga ullam placeat sapiente quae ratione laborum nam.',
    },
]
const blogDetails = ({params}: {params : any}) => {
    console.log(params)
      const b = blogs.find((blog) => blog.id === params.id);

      const [comments, setComments] = useState<string[]>([]);
      const [newComment, setNewComment] = useState<string>('');

      if (!b) return <p>Blog not found</p>;
      const handleAddComment = () => {
        if (newComment.trim()) {
          setComments([...comments, newComment]);
          setNewComment('');
        }
      };
    
      return (
        <div className='blogHome'>
          <div className='iBlog' >
            <div className='iBlog1'>
            <img className='iBlogImg' src={b.image}  />
            <div className='nameDes'>
        <p className='iBlogName'>{b.title}</p>
        <p className='iBlogDes'>{b.description}</p>
            </div>
            </div>
        <div className='iBlog2'>
        <p className='iBlogDetail'>Details: {b.detail}</p>    
        </div>
      </div>
      <div className=" commentSection">
      <h2>Comments</h2>
      <ul className='comments'>
        {comments.map((comment, index) => (
          <li key={index}>{comment}</li>
        ))}
      </ul>

      <input className='commentInp'
        type="text"
        value={newComment}
        onChange={(e) => setNewComment(e.target.value)}
        placeholder="Add a comment"
      />
      <button className='commentBtn' onClick={handleAddComment}>Post Comment</button>

        
      </div>

        </div>
      );
    };
    
    export default blogDetails;