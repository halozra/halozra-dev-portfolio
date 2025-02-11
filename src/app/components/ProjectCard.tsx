
// Deklarasi tipe untuk properti komponen
interface ProjectCardProps {
  image: string;
  title: string;
  description: string;
  githubLink: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ image, title, description, githubLink }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <img
        src={image}
        className="w-full h-48 object-cover rounded-lg mb-4"
        alt={title}
      />
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <a 
        href={githubLink} 
        target="_blank" 
        rel="noopener noreferrer"
        className="text-purple-600 hover:text-purple-800 transition duration-300"
      >
        View on GitHub
      </a>
    </div>
  );
}

export default ProjectCard;
