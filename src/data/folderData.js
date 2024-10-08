const fileData = {
    "name": "root",
    "isFolder": true,
    "children": [
      {
        "name": "Documents",
        "isFolder": true,
        "children": [
          {
            "name": "Resume.pdf",
            "isFolder": false,
            "size": "1.2MB",
            "type": "pdf"
          },
          {
            "name": "Project",
            "isFolder": true,
            "children": [
              {
                "name": "ProjectPlan.docx",
                "isFolder": false,
                "size": "200KB",
                "type": "docx"
              },
              {
                "name": "Presentation.pptx",
                "isFolder": false,
                "size": "3MB",
                "type": "pptx"
              }
            ]
          }
        ]
      },
      {
        "name": "Pictures",
        "isFolder": true,
        "children": [
          {
            "name": "Vacation.jpg",
            "isFolder": false,
            "size": "2.5MB",
            "type": "jpg"
          },
          {
            "name": "ProfilePic.png",
            "isFolder": false,
            "size": "1MB",
            "type": "png"
          }
        ]
      },
      {
        "name": "Music",
        "isFolder": true,
        "children": [
          {
            "name": "Song.mp3",
            "isFolder": false,
            "size": "5MB",
            "type": "mp3"
          },
          {
            "name": "Album",
            "isFolder": true,
            "children": [
              {
                "name": "Track1.mp3",
                "isFolder": false,
                "size": "4MB",
                "type": "mp3"
              },
              {
                "name": "Track2.mp3",
                "isFolder": false,
                "size": "4.5MB",
                "type": "mp3"
              }
            ]
          }
        ]
      }
    ]
  }
  
  export default fileData;
