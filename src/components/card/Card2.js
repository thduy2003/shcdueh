import React from "react";
import styled, { css } from "styled-components";
const CardStyled = styled.div`
  position: relative;
  .card-image {
    height: 400px;
    width: 100%;
    border-radius: 8px;
    img {
      display: block;
      height: 100%;
      width: 100%;
      object-fit: cover;
      border-radius: inherit;
    }
  }
  .card-content {
    position: absolute;
    left: 50%;
    transform: translate(-50%, 50%);
    bottom: 0;
    width: calc(100% - 36px);
    background-color: white;
    z-index: 10;
    border-radius: 20px;
    padding: 20px;
    .card-top {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 30px;
      .card-user {
        display: flex;
        align-items: center;
        column-gap: 12px;
        img {
          width: 30px;
          height: 30px;
          border-radius: 100rem;
          object-fit: cover;
          flex-shrink: 0;
        }
        .user-name {
          font-weight: 300;
          font-size: 16px;
          color: #333333;
        }
      }
      .card-meta {
        display: flex;
        align-items: center;
        gap: 12px;
      }
    }
    .card-footer {
      display: flex;
      justify-content: space-between;
      align-items: center;
      .card-title {
        font-weight: 500;
        font-size: 18px;
      }
      .card-amount {
        font-weight: 700;
        font-size: 18px;
        ${(props) =>
          props.secondary &&
          css`
            background: linear-gradient(86.88deg, #20e3b2, #2cccff);
          `};
        ${(props) =>
          !props.secondary &&
          css`
            background: linear-gradient(
              86.88deg,
              #7d6aff 1.38%,
              #ffb86c 64.35%,
              #fc2872 119.91%
            );
          `};
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        color: transparent;
      }
    }
  }
`;

const Card2 = (props) => {
  return (
    <CardStyled secondary={props.secondary}>
      <div className="card-image">
        <img
          src="https://cdn.dribbble.com/users/2400293/screenshots/16946975/media/8a158c81922bea0aee537113726fecd4.png?compress=1&resize=1000x750&vertical=top"
          alt=""
        />
      </div>
      <div className="card-content">
        <div className="card-top">
          <div className="card-user">
            <img
              src="https://cdn.dribbble.com/users/2400293/screenshots/16946975/media/8a158c81922bea0aee537113726fecd4.png?compress=1&resize=1000x750&vertical=top"
              alt=""
            />
            <span className="user-name">@zndrson</span>
          </div>
          <div className="card-meta">
            <img src="/icon-heart.svg" alt="" />
            <span>256</span>
          </div>
        </div>
        <div className="card-footer">
          <h3 className="card-title">Cosmic Perspective</h3>
          <span className="card-amount">12,000 PSL</span>
        </div>
      </div>
    </CardStyled>
  );
};

export default Card2;
