import React from 'react';
/**
 * @param name 按钮标题
 * @param fun 按钮名称
 */
type props = {
  name: string;
  fun: string;
  onClick: () => void;
};

const CustomButton: React.FC<props> = (props) => {
  return (
    <div>
      <span>
        {props.name}:
        <button type="button" onClick={() => props.onClick()}>
          {props.fun}
        </button>
      </span>
    </div>
  );
};
export default CustomButton;
