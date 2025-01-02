import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Tooltip,
  } from "@material-tailwind/react";
   
  export function ProfileCard({username, role}) {
    return (
      <Card className="w-96 items-center m-14 border-2 border-t-0 border-r-0 border-l-0 border-green-800">
        <CardHeader floated={false} className="h-70 ">
          <img src='https://media.licdn.com/dms/image/v2/D5603AQEQeqm1UYtjzw/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1722875762539?e=1736380800&v=beta&t=u71tJaWyLTDUW4mOzRYUFXQYRbR0PQ0WyXDc1U54mno' alt="profile-picture" />
        </CardHeader>
        <CardBody className="text-center ">
          <Typography variant="h4" color="blue-gray" className="mb-2">
            {username}
          </Typography>
          <Typography color="blue-gray" className="font-medium" textGradient>
            {role}
          </Typography>
        </CardBody>

        
      </Card>
      
      
    );
  }