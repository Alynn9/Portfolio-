import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.scss']
})
export class TestimonialsComponent implements OnInit {
 
  selectedIndex = 0;
  indicators = true;
  autoSlide = true;

  title = 'portfolio';
 
  ngOnInit(){
    if(this.autoSlide){
      this.autoSlideImages();
    }
  }

  testimonialsArray = [ 
    {
      img: "../assets/pic 1.jpg",
      content: "“Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, impedit velit laboriosam enim quibusdam aspernatur. Et ut, minus eligendi, harum dolores magni, perferendis voluptate inventore quisquam nisi explicabo facilis reprehenderit.”",
      name:"Olivia Martines" ,
      ncontent  : "Creative Lead, Good Kind"
    },
    {
      img: "../assets/pic 2.jpg",
      content: "“Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, impedit velit laboriosam enim quibusdam aspernatur. Et ut, minus eligendi, harum dolores magni, perferendis voluptate inventore quisquam nisi explicabo facilis reprehenderit.”",
      name:"  Danela Lori" ,
      ncontent : "Creative Lead, Good Kind"
    },
    {
      img: "../assets/pic 3.jpg",
      content: "“Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, reprehenderit natus fuga perferendis eius explicabo  eos quis aliquam consectetur ullam, dolore dolor harum quas, nisi doloremque pariatur quaerat ad eligendi?”",
      name:"Kendall Tremblay" ,
      ncontent : "Creative Lead, Good Kind"
    },
    {
      img: "../assets/pic 4.jpg",
      content: "“Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum cupiditate neque rem tenetur sed provident quaerat similique reprehenderit Nulla dolores, dolor laborum ab nisi saepe consectetur aperiam quisquam a porro.”",
      name:"Kendall Tremblay" ,
      ncontent: "Creative Lead, Good Kind"
    },
    {
      img : "../assets/pic 5.jpg",
      content: "“Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, impedit velit laboriosam enim quibusdam aspernatur. Et ut, minus eligendi, harum dolores magni, perferendis voluptate inventore quisquam nisi explicabo facilis reprehenderit.”",
      name:"Daniel Mourad" ,
      ncontent: "Creative Lead, Good Kind"
    },
  ]

  selectedDiv(index:number) : void {
    this.selectedIndex  = index;
  }

  next(){
    if(this.selectedIndex === this.testimonialsArray.length-1){
      this.selectedIndex = 0;
    }
    else{
      this.selectedIndex++;
    }
  }

  autoSlideImages():void{
    setInterval(()=>{
      this.next();
    },3000)
  }
}
