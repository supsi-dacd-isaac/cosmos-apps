// Code generated by protoc-gen-gogo. DO NOT EDIT.
// source: pm/genesis.proto

package types

import (
	fmt "fmt"
	_ "github.com/gogo/protobuf/gogoproto"
	proto "github.com/gogo/protobuf/proto"
	io "io"
	math "math"
	math_bits "math/bits"
)

// Reference imports to suppress errors if they are not otherwise used.
var _ = proto.Marshal
var _ = fmt.Errorf
var _ = math.Inf

// This is a compile-time assertion to ensure that this generated file
// is compatible with the proto package it is being compiled against.
// A compilation error at this line likely means your copy of the
// proto package needs to be updated.
const _ = proto.GoGoProtoPackageIsVersion3 // please upgrade the proto package

// GenesisState defines the pm module's genesis state.
type GenesisState struct {
	Dso        *Dso        `protobuf:"bytes,1,opt,name=dso,proto3" json:"dso,omitempty"`
	PlayerList []Player    `protobuf:"bytes,2,rep,name=playerList,proto3" json:"playerList"`
	Aggregator *Aggregator `protobuf:"bytes,3,opt,name=aggregator,proto3" json:"aggregator,omitempty"`
	LemList    []Lem       `protobuf:"bytes,4,rep,name=lemList,proto3" json:"lemList"`
}

func (m *GenesisState) Reset()         { *m = GenesisState{} }
func (m *GenesisState) String() string { return proto.CompactTextString(m) }
func (*GenesisState) ProtoMessage()    {}
func (*GenesisState) Descriptor() ([]byte, []int) {
	return fileDescriptor_fec31e9358cfa321, []int{0}
}
func (m *GenesisState) XXX_Unmarshal(b []byte) error {
	return m.Unmarshal(b)
}
func (m *GenesisState) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	if deterministic {
		return xxx_messageInfo_GenesisState.Marshal(b, m, deterministic)
	} else {
		b = b[:cap(b)]
		n, err := m.MarshalToSizedBuffer(b)
		if err != nil {
			return nil, err
		}
		return b[:n], nil
	}
}
func (m *GenesisState) XXX_Merge(src proto.Message) {
	xxx_messageInfo_GenesisState.Merge(m, src)
}
func (m *GenesisState) XXX_Size() int {
	return m.Size()
}
func (m *GenesisState) XXX_DiscardUnknown() {
	xxx_messageInfo_GenesisState.DiscardUnknown(m)
}

var xxx_messageInfo_GenesisState proto.InternalMessageInfo

func (m *GenesisState) GetDso() *Dso {
	if m != nil {
		return m.Dso
	}
	return nil
}

func (m *GenesisState) GetPlayerList() []Player {
	if m != nil {
		return m.PlayerList
	}
	return nil
}

func (m *GenesisState) GetAggregator() *Aggregator {
	if m != nil {
		return m.Aggregator
	}
	return nil
}

func (m *GenesisState) GetLemList() []Lem {
	if m != nil {
		return m.LemList
	}
	return nil
}

func init() {
	proto.RegisterType((*GenesisState)(nil), "supsidacdisaac.pm.pm.GenesisState")
}

func init() { proto.RegisterFile("pm/genesis.proto", fileDescriptor_fec31e9358cfa321) }

var fileDescriptor_fec31e9358cfa321 = []byte{
	// 304 bytes of a gzipped FileDescriptorProto
	0x1f, 0x8b, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02, 0xff, 0x74, 0x90, 0x4f, 0x4b, 0x02, 0x41,
	0x18, 0xc6, 0x77, 0x52, 0x0a, 0x46, 0xa1, 0xd8, 0x3c, 0x98, 0xc4, 0x24, 0x9d, 0x84, 0x70, 0x06,
	0x8c, 0x0e, 0xdd, 0x4a, 0x82, 0x2e, 0x42, 0x61, 0xb7, 0x6e, 0xe3, 0xee, 0x30, 0x2d, 0xf8, 0x36,
	0x2f, 0xbe, 0x23, 0xe4, 0xb7, 0xe8, 0x63, 0x79, 0xf4, 0xd8, 0x29, 0x42, 0xbf, 0x46, 0x87, 0xd8,
	0xd9, 0xb5, 0x3c, 0x6c, 0x97, 0xe5, 0xdd, 0x87, 0xe7, 0xcf, 0x8f, 0xe1, 0x47, 0x08, 0xca, 0x9a,
	0x57, 0x43, 0x19, 0x49, 0x9c, 0x39, 0xef, 0xe2, 0x16, 0xcd, 0x91, 0xb2, 0x54, 0x27, 0x69, 0x46,
	0x5a, 0x27, 0x12, 0x41, 0x22, 0x74, 0x9a, 0x08, 0x2a, 0x25, 0x57, 0x78, 0x3a, 0x87, 0x08, 0x0a,
	0xa7, 0x7a, 0x61, 0x66, 0xa5, 0x70, 0x8c, 0xa0, 0xb4, 0xb5, 0x33, 0x63, 0xb5, 0x77, 0x5b, 0x31,
	0xcf, 0x4c, 0x0d, 0x94, 0x7f, 0x2d, 0xeb, 0xac, 0x0b, 0xa7, 0xca, 0xaf, 0x42, 0x3d, 0xff, 0x66,
	0xbc, 0x79, 0x5f, 0xec, 0x3f, 0x79, 0xed, 0x4d, 0x7c, 0xc1, 0x6b, 0x29, 0xb9, 0x36, 0xeb, 0xb2,
	0x5e, 0x63, 0x70, 0x22, 0xab, 0x60, 0xe4, 0x1d, 0xb9, 0x71, 0xee, 0x8a, 0x87, 0x9c, 0x17, 0x18,
	0xa3, 0x8c, 0x7c, 0x7b, 0xaf, 0x5b, 0xeb, 0x35, 0x06, 0xa7, 0xd5, 0x99, 0xc7, 0xe0, 0x1b, 0xd6,
	0x97, 0x9f, 0x67, 0xd1, 0x78, 0x27, 0x15, 0xdf, 0x70, 0xfe, 0x47, 0xde, 0xae, 0x85, 0xdd, 0x6e,
	0x75, 0xc7, 0xed, 0xaf, 0x6f, 0xbc, 0x93, 0x89, 0xaf, 0xf9, 0xc1, 0xd4, 0x40, 0x40, 0xa8, 0x07,
	0x84, 0x7f, 0xb0, 0x47, 0x06, 0xca, 0xfd, 0xad, 0x7f, 0xf8, 0xb0, 0x5c, 0x0b, 0xb6, 0x5a, 0x0b,
	0xf6, 0xb5, 0x16, 0xec, 0x7d, 0x23, 0xa2, 0xd5, 0x46, 0x44, 0x1f, 0x1b, 0x11, 0x3d, 0x5f, 0xd9,
	0xcc, 0xbf, 0xcc, 0x27, 0x32, 0x71, 0xa0, 0x42, 0x5b, 0x3f, 0xaf, 0xeb, 0x87, 0x3e, 0x95, 0x38,
	0x02, 0x47, 0x7d, 0x8d, 0x48, 0x0a, 0x41, 0xbd, 0xe5, 0x1f, 0xbf, 0x40, 0x43, 0x93, 0xfd, 0xf0,
	0xac, 0x97, 0x3f, 0x01, 0x00, 0x00, 0xff, 0xff, 0x8d, 0xf0, 0xf7, 0x3f, 0xd8, 0x01, 0x00, 0x00,
}

func (m *GenesisState) Marshal() (dAtA []byte, err error) {
	size := m.Size()
	dAtA = make([]byte, size)
	n, err := m.MarshalToSizedBuffer(dAtA[:size])
	if err != nil {
		return nil, err
	}
	return dAtA[:n], nil
}

func (m *GenesisState) MarshalTo(dAtA []byte) (int, error) {
	size := m.Size()
	return m.MarshalToSizedBuffer(dAtA[:size])
}

func (m *GenesisState) MarshalToSizedBuffer(dAtA []byte) (int, error) {
	i := len(dAtA)
	_ = i
	var l int
	_ = l
	if len(m.LemList) > 0 {
		for iNdEx := len(m.LemList) - 1; iNdEx >= 0; iNdEx-- {
			{
				size, err := m.LemList[iNdEx].MarshalToSizedBuffer(dAtA[:i])
				if err != nil {
					return 0, err
				}
				i -= size
				i = encodeVarintGenesis(dAtA, i, uint64(size))
			}
			i--
			dAtA[i] = 0x22
		}
	}
	if m.Aggregator != nil {
		{
			size, err := m.Aggregator.MarshalToSizedBuffer(dAtA[:i])
			if err != nil {
				return 0, err
			}
			i -= size
			i = encodeVarintGenesis(dAtA, i, uint64(size))
		}
		i--
		dAtA[i] = 0x1a
	}
	if len(m.PlayerList) > 0 {
		for iNdEx := len(m.PlayerList) - 1; iNdEx >= 0; iNdEx-- {
			{
				size, err := m.PlayerList[iNdEx].MarshalToSizedBuffer(dAtA[:i])
				if err != nil {
					return 0, err
				}
				i -= size
				i = encodeVarintGenesis(dAtA, i, uint64(size))
			}
			i--
			dAtA[i] = 0x12
		}
	}
	if m.Dso != nil {
		{
			size, err := m.Dso.MarshalToSizedBuffer(dAtA[:i])
			if err != nil {
				return 0, err
			}
			i -= size
			i = encodeVarintGenesis(dAtA, i, uint64(size))
		}
		i--
		dAtA[i] = 0xa
	}
	return len(dAtA) - i, nil
}

func encodeVarintGenesis(dAtA []byte, offset int, v uint64) int {
	offset -= sovGenesis(v)
	base := offset
	for v >= 1<<7 {
		dAtA[offset] = uint8(v&0x7f | 0x80)
		v >>= 7
		offset++
	}
	dAtA[offset] = uint8(v)
	return base
}
func (m *GenesisState) Size() (n int) {
	if m == nil {
		return 0
	}
	var l int
	_ = l
	if m.Dso != nil {
		l = m.Dso.Size()
		n += 1 + l + sovGenesis(uint64(l))
	}
	if len(m.PlayerList) > 0 {
		for _, e := range m.PlayerList {
			l = e.Size()
			n += 1 + l + sovGenesis(uint64(l))
		}
	}
	if m.Aggregator != nil {
		l = m.Aggregator.Size()
		n += 1 + l + sovGenesis(uint64(l))
	}
	if len(m.LemList) > 0 {
		for _, e := range m.LemList {
			l = e.Size()
			n += 1 + l + sovGenesis(uint64(l))
		}
	}
	return n
}

func sovGenesis(x uint64) (n int) {
	return (math_bits.Len64(x|1) + 6) / 7
}
func sozGenesis(x uint64) (n int) {
	return sovGenesis(uint64((x << 1) ^ uint64((int64(x) >> 63))))
}
func (m *GenesisState) Unmarshal(dAtA []byte) error {
	l := len(dAtA)
	iNdEx := 0
	for iNdEx < l {
		preIndex := iNdEx
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return ErrIntOverflowGenesis
			}
			if iNdEx >= l {
				return io.ErrUnexpectedEOF
			}
			b := dAtA[iNdEx]
			iNdEx++
			wire |= uint64(b&0x7F) << shift
			if b < 0x80 {
				break
			}
		}
		fieldNum := int32(wire >> 3)
		wireType := int(wire & 0x7)
		if wireType == 4 {
			return fmt.Errorf("proto: GenesisState: wiretype end group for non-group")
		}
		if fieldNum <= 0 {
			return fmt.Errorf("proto: GenesisState: illegal tag %d (wire type %d)", fieldNum, wire)
		}
		switch fieldNum {
		case 1:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field Dso", wireType)
			}
			var msglen int
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowGenesis
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				msglen |= int(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			if msglen < 0 {
				return ErrInvalidLengthGenesis
			}
			postIndex := iNdEx + msglen
			if postIndex < 0 {
				return ErrInvalidLengthGenesis
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			if m.Dso == nil {
				m.Dso = &Dso{}
			}
			if err := m.Dso.Unmarshal(dAtA[iNdEx:postIndex]); err != nil {
				return err
			}
			iNdEx = postIndex
		case 2:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field PlayerList", wireType)
			}
			var msglen int
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowGenesis
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				msglen |= int(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			if msglen < 0 {
				return ErrInvalidLengthGenesis
			}
			postIndex := iNdEx + msglen
			if postIndex < 0 {
				return ErrInvalidLengthGenesis
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.PlayerList = append(m.PlayerList, Player{})
			if err := m.PlayerList[len(m.PlayerList)-1].Unmarshal(dAtA[iNdEx:postIndex]); err != nil {
				return err
			}
			iNdEx = postIndex
		case 3:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field Aggregator", wireType)
			}
			var msglen int
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowGenesis
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				msglen |= int(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			if msglen < 0 {
				return ErrInvalidLengthGenesis
			}
			postIndex := iNdEx + msglen
			if postIndex < 0 {
				return ErrInvalidLengthGenesis
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			if m.Aggregator == nil {
				m.Aggregator = &Aggregator{}
			}
			if err := m.Aggregator.Unmarshal(dAtA[iNdEx:postIndex]); err != nil {
				return err
			}
			iNdEx = postIndex
		case 4:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field LemList", wireType)
			}
			var msglen int
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowGenesis
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				msglen |= int(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			if msglen < 0 {
				return ErrInvalidLengthGenesis
			}
			postIndex := iNdEx + msglen
			if postIndex < 0 {
				return ErrInvalidLengthGenesis
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.LemList = append(m.LemList, Lem{})
			if err := m.LemList[len(m.LemList)-1].Unmarshal(dAtA[iNdEx:postIndex]); err != nil {
				return err
			}
			iNdEx = postIndex
		default:
			iNdEx = preIndex
			skippy, err := skipGenesis(dAtA[iNdEx:])
			if err != nil {
				return err
			}
			if (skippy < 0) || (iNdEx+skippy) < 0 {
				return ErrInvalidLengthGenesis
			}
			if (iNdEx + skippy) > l {
				return io.ErrUnexpectedEOF
			}
			iNdEx += skippy
		}
	}

	if iNdEx > l {
		return io.ErrUnexpectedEOF
	}
	return nil
}
func skipGenesis(dAtA []byte) (n int, err error) {
	l := len(dAtA)
	iNdEx := 0
	depth := 0
	for iNdEx < l {
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return 0, ErrIntOverflowGenesis
			}
			if iNdEx >= l {
				return 0, io.ErrUnexpectedEOF
			}
			b := dAtA[iNdEx]
			iNdEx++
			wire |= (uint64(b) & 0x7F) << shift
			if b < 0x80 {
				break
			}
		}
		wireType := int(wire & 0x7)
		switch wireType {
		case 0:
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return 0, ErrIntOverflowGenesis
				}
				if iNdEx >= l {
					return 0, io.ErrUnexpectedEOF
				}
				iNdEx++
				if dAtA[iNdEx-1] < 0x80 {
					break
				}
			}
		case 1:
			iNdEx += 8
		case 2:
			var length int
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return 0, ErrIntOverflowGenesis
				}
				if iNdEx >= l {
					return 0, io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				length |= (int(b) & 0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			if length < 0 {
				return 0, ErrInvalidLengthGenesis
			}
			iNdEx += length
		case 3:
			depth++
		case 4:
			if depth == 0 {
				return 0, ErrUnexpectedEndOfGroupGenesis
			}
			depth--
		case 5:
			iNdEx += 4
		default:
			return 0, fmt.Errorf("proto: illegal wireType %d", wireType)
		}
		if iNdEx < 0 {
			return 0, ErrInvalidLengthGenesis
		}
		if depth == 0 {
			return iNdEx, nil
		}
	}
	return 0, io.ErrUnexpectedEOF
}

var (
	ErrInvalidLengthGenesis        = fmt.Errorf("proto: negative length found during unmarshaling")
	ErrIntOverflowGenesis          = fmt.Errorf("proto: integer overflow")
	ErrUnexpectedEndOfGroupGenesis = fmt.Errorf("proto: unexpected end of group")
)
