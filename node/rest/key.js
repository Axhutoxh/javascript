const mongoose = require('mongoose');

const db= "mongodb+srv://practice:Ashutosh@cluster0.tmhvapq.mongodb.net/practice?retryWrites=true&w=majority"

mongoose.connect(db, {
}).then(()=>{
    console.log("Connection Sucessfull")
}).catch((err)=>{
console.log("Connection",err)
})


// Schema
const courseSchema = new mongoose.Schema({
    name: String,
    creator: String,
    publishedDate: { type: Date, default: Date.now },
    isPublished: Boolean,
    rating: Number,
  });
  

// Model
const Course = mongoose.model("course", courseSchema);  

// Create
async function createCourse() {
    const course = new Course({
      name: "Java",
      creator: "Akash",
      isPublished: false,
      rating: 4.8,
    });
  
    await course.save();
  }

// READ
async function getCourse(){
  const course = await Course.find({creator: "Akash"}).select({rating: true}); // include rating and it takes boolean

}

//UPDATE
async function updateCourse(courseId){
  const course = await Course.findById(courseId)
  if(!course){
    console.log("Course not found")
    return
  } 

  course.name='MERN'
  const updatedCourse = await course.save()


}

// DELETE

async function deleteCourse(courseId){
  const course = await Course.findByIdAndDelete(courseId)

}

deleteCourse('65c302cbebb93ada3845dcca')