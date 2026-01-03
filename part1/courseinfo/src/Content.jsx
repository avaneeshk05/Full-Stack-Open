const Part = ({ name, exercises }) => (
  <p>{name} {exercises}</p>
)

export const Content = ({ parts }) => {
    const ans=[];
    parts.forEach(part => {
        ans.push(<Part name={part.name} exercises={part.exercises}/>)
    });
    return (ans);
}